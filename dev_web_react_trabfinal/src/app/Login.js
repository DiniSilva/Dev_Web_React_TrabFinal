import "./Login.css"
import React, { Component } from 'react';


class Login extends Component {
    constructor(props) {
        super(props);      
    }

    state = {
        novoCliente:{
            "Nome": "",
            "Nif": "",
            "Morada": "",
            "CodPostal": "",
            "Email": "",
            "Telemovel": "",
        }, password: "",
        UserLogin: {
            Email: "", 
            Password: ""
        }, isLogged: false, LogId: null, registo: false,
        entrar: true, listaPerfil:[],
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === "Password"){
            this.setState({ password: value});
        }
        this.setState(prevState => ({
            novoCliente: {
            ...prevState.novoCliente,
            [name]: value
            }
        }));
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { novoCliente, password } = this.state;
        console.log(novoCliente, password);
        this.meterDadosCliente(novoCliente, password);
        // Limpar a form
        this.setState({
          novoCliente: {
            "Nome": "",
            "Nif": "",
            "Morada": "",
            "CodPostal": "",
            "Email": "",
            "Telemovel": "",
          }, password: ""
        });
    };
    
    meterDadosCliente(obj, password){
        var resquestOptions = {
            method: "POST",
            redirect: "follow",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(obj)
        };

        fetch("https://localhost:7294/api/ClientesAPI/create?password=" + password, resquestOptions)
            .then(res => res.json())
            .then(result => {console.log(result);
                //Refresh na lista dos clientes
                this.props.buscar()
            })
            .catch(error => console.log("error", error));
    }

    handleInputChangeLogin = (event) => {
        const { name, value } = event.target;
        this.setState(prevState => ({
            UserLogin: {
                ...prevState.UserLogin,
                [name]: value
            }
        }));
    };

    handleLogin = (event) => {
        event.preventDefault();
        const { UserLogin } = this.state;
        console.log( UserLogin );
        this.login(UserLogin);
        this.setState({
            UserLogin: {
                Email: "",
                Password: "",
            }
        });
    };

    login (obj){
        var requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(obj)
        };
        
        fetch("https://localhost:7294/api/ClientesAPI/login", requestOptions)
        .then(response => {
            if (response.status === 400) {
                throw new Error("lol");
            }
            return response.json()
        })
        .then((result) => {
            if (result) {
                this.state.isLogged = true;
                this.state.LogId = result.clienteId;
                this.props.LoginStatus(true,result.clienteId)
                setTimeout(() => {this.buscarInfoCliente(this.state.LogId);},"500");
                console.log("LOGIN FEITO!", this.state.isLogged, this.state.LogId );
            } else {
                console.log("Login failed");
            }
        })
        .catch((error) => {
            if( error.message === "lol") {
                console.log("Login failed");
            }
            console.log(error);
        });     
    };
    
    logout (){
        var requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
        };
        fetch("https://localhost:7294/api/ClientesAPI/logout", requestOptions)
        .then(response => response.json())
        .then((result) => {
            if (result) {
                this.state.isLogged = false;
                this.state.LogId = null;
                this.props.LoginStatus(false,null);
                this.state.listaPerfil.splice(0,this.state.listaPerfil.length);
                console.log("LOGIN FEITO!", this.state.isLogged, this.state.LogId );
            } else {
                throw new Error("Logout failed");
            }
        })
        .catch((error) => {
            console.log(error);
        });
        this.scrollToLoja();
    };

    handleButtonClick = () => {
        this.setState({
          registo: !this.state.registo,
          entrar: !this.state.entrar
        });
    };

    buscarInfoCliente(id) {
        this.props.buscarCliente(id);
        setTimeout(() => {
            console.log(this.props.dados);
            let listaPerfil = this.state.listaPerfil;
            if (typeof this.props.dados === "object") {
                Object.keys(this.props.dados).forEach((key) => {
                    if (key !== "id" && key !== "userId" && key !== "listaDipositivos") {
                        let displayName = "";
                        const value = this.props.dados[key];
                        switch (key) {
                            case "nome":
                                displayName = "Nome";
                                break;
                            case "nif":
                                displayName = "NIF";
                                break;
                            case "morada":
                                displayName = "Morada";
                                break;
                            case "codPostal":
                                displayName = "Código Postal";
                                break;
                            case "email":
                                displayName = "Email";
                                break;
                            case "telemovel":
                                displayName = "Telemovel";
                                break;
                            
                            default:
                                displayName = key; // Use the key as the display name by default
                                break;
                        }
                        listaPerfil.push(
                            <li className="list-group-item">
                                <div>{displayName} : {value}</div>
                            </li>
                        );
                    }
                });
                this.setState({ listaPerfil }); 
            }
        }, "500");
        setTimeout(() => {this.scrollToAreaCliente()}, "500");          
    }

    scrollToAreaCliente = () => {
        const areaClienteSection = document.getElementById('areaCliente');
        if (areaClienteSection) {
            areaClienteSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    scrollToLoja = () => {
        const lojaSection = document.getElementById('sec');
        if (lojaSection) {
            lojaSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
      
    render() {

        const { 
            novoCliente,
            UserLogin, 
            listaPerfil, 
            registo, 
            entrar, 
            isLogged
        } = this.state;
       
        return (
            
            <div className="offcanvas offcanvas-end text-bg-dark spacer layer1" data-bs-scroll="false" tabIndex="-1" id="sidebar" aria-labelledby="sidebarLabel" style={{ width: "33%" }}>
                {/*<a href="javascript:void(0)" className="closebtn" onClick={() => this.props.close()}>&times;</a>*/}
                <div className="offcanvas-header">
                    <a type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></a>
                    
                </div>    
                {!isLogged ? (
                <div className="offcanvas-body"  style={{ paddingTop: registo ? '100px' : '200px' }}>
                   
                    {registo && <div>
                        <div className="text-start fontEstilo was-validated"><h1>Registo</h1></div>
                            <form onSubmit={this.handleSubmit} className="custom-form needs-validation" noValidate>
                                <div className="text-start fontEstilo">
                                    <div className="form-group row">
                                        <label htmlFor="staticEmail" className="col-sm-3 col-form-label">Nome</label>
                                        <div className="col-sm-9">
                                            <input className="inputEstilo fontInput" type="text" placeholder=" Nome" name="Nome" value={novoCliente.Nome} onChange={this.handleInputChange} required/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="staticEmail" className="col-sm-3 col-form-label">Morada</label>
                                        <div className="col-sm-9">
                                            <input className="inputEstilo fontInput" type="text" placeholder=" Morada" name="Morada" value={novoCliente.Morada} onChange={this.handleInputChange} required/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="staticEmail" className="col-sm-3 col-form-label">Cód.Postal</label>
                                        <div className="col-sm-9">
                                            <input className="inputEstilo fontInput" type="text" placeholder=" XXXX-XXX TERRA" name="CodPostal" value={novoCliente.CodPostal} onChange={this.handleInputChange} required/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="staticEmail" className="col-sm-3 col-form-label">Email</label>
                                        <div className="col-sm-9">
                                            <input className="inputEstilo fontInput" type="email" placeholder=" Email" name="Email" value={novoCliente.Email} onChange={this.handleInputChange} required/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="staticEmail" className="col-sm-3 col-form-label">Password</label>
                                        <div className="col-sm-9">
                                            <input className="inputEstilo fontInput" type="password" placeholder=" Password" name="Password" value={this.state.password} onChange={this.handleInputChange} required/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="staticEmail" className="col-sm-3 col-form-label">Telemóvel</label>
                                        <div className="col-sm-9">
                                            <input className="inputEstilo fontInput" type="text" placeholder=" Telemóvel" name="Telemovel" value={novoCliente.Telemovel} onChange={this.handleInputChange} required/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="staticEmail" className="col-sm-3 col-form-label">NIF</label>
                                        <div className="col-sm-9">
                                            <input className="inputEstilo fontInput" type="text" placeholder=" NIF" name="Nif" value={novoCliente.Nif} onChange={this.handleInputChange} required/>
                                        </div>
                                    </div>
                                    <div className="d-grid gap-2">
                                        <button type="submit" className="botaoLogin">Criar conta</button>
                                    </div>
                                </div>
                            </form> 
                        <p> <a href="#" onClick={this.handleButtonClick} >Tenho conta</a></p></div>}
                    {entrar && <div >
                        <div className="text-start fontEstilo"><h1>Login</h1></div>
                            <form onSubmit={this.handleLogin} className="custom-form was-validated" noValidate> 
                                <div className="text-start fontEstilo">
                                    <div className="form-group row">
                                        <label htmlFor="staticEmail" className="col-sm-3 col-form-label ">Email</label>
                                        <div className="col-sm-9">
                                            <input className="inputEstilo fontInput" type="email" placeholder=" Email" name="Email" value={UserLogin.Email} onChange={this.handleInputChangeLogin} required/>
                                            <div className="valid-feedback">Válido.</div>
                                            <div className="invalid-feedback">Por favor escreva o seu Email correto.</div>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="form-group row">
                                        <label htmlFor="staticEmail" className="col-sm-3 col-form-label custom-label">Password</label>
                                        <div className="col-sm-9">
                                            <input className="inputEstilo fontInput" type="password" placeholder=" Password" name="Password" value={UserLogin.Password} onChange={this.handleInputChangeLogin} required/>
                                            <div className="valid-feedback">Válido.</div>
                                            <div className="invalid-feedback">Por favor escreva a sua Password.</div>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="d-grid gap-2"> <button type="submit" className=" botaoLogin">Entrar</button></div>
                                </div>
                            </form>
                        <p>Não têm conta? <a href="#" onClick={this.handleButtonClick} >Registe-se</a></p> 
                    </div>}
                </div>
                ) : (
                    <div className="offcanvas-body">
                        <div className="text-start fontEstilo"><h1>Perfil</h1></div>
                        <div className="fontEstilo">
                            <ul className=" listaEstilo">
                                {listaPerfil}
                            </ul>
                        </div>
                        <div className="d-grid gap-2"> <button  className=" botaoLogin" onClick={() => this.logout()}>Sair</button></div>
                    </div>
                )}
            </div> 
        );
    }
}

export default Login;