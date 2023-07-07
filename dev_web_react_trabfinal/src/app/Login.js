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
        }, isLogged: false, LogId: null,registo: false,
        entrar: true, listaPerfil:[]
        
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
        .then(response => response.json())
        .then((result) => {
            if (result) {
                this.state.isLogged = true;
                this.state.LogId = result.clienteId;
                this.props.LoginStatus(true,result.clienteId)
                console.log("LOGIN FEITO!", this.state.isLogged, this.state.LogId );
            } else {
                throw new Error("Login failed");
            }
        })
        .catch((error) => {
            console.log(error);
        });
        setTimeout(() => {this.buscarInfoCliente(this.state.LogId);},"500");
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
                this.props.LoginStatus(false,null)
                console.log("LOGIN FEITO!", this.state.isLogged, this.state.LogId );
            } else {
                throw new Error("Logout failed");
            }
        })
        .catch((error) => {
            console.log(error);
        });
    };

    handleButtonClick = () => {
        this.setState({
          registo: !this.state.registo,
          entrar: !this.state.entrar
        });
      };

     buscarInfoCliente(id) {
        this.props.buscarCliente(id);
        setTimeout(() => {console.log(this.props.dados);
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
                <div>{displayName}: {value}</div>
              </li>
            );
          }});
          this.setState({ listaPerfil }); 
        }},"500");
      }
      
    render() {

        let novoCliente = this.state.novoCliente;
        let UserLogin = this.state.UserLogin;

        let listaPerfil = this.state.listaPerfil;

        const { registo, entrar,isLogged } = this.state;

        return (
            <div class="offcanvas offcanvas-end text-bg-dark" data-bs-scroll="false" tabIndex="-1" id="sidebar" aria-labelledby="sidebarLabel">
                {/*<a href="javascript:void(0)" class="closebtn" onClick={() => this.props.close()}>&times;</a>*/}
                <div class="offcanvas-header">
                    <a type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></a>
                </div>    
                {!isLogged ? (
                <div class="offcanvas-body">
                   
                    {registo && <div>
                        <h2>Criar Cliente</h2>
                        <form onSubmit={this.handleSubmit}>
                            <label>
                            Nome:
                            <input type="text" name="Nome" value={novoCliente.Nome} onChange={this.handleInputChange} />
                            </label>
                            <label>
                            Morada:
                            <input type="text" name="Morada" value={novoCliente.Morada} onChange={this.handleInputChange} />
                            </label>
                            <label>
                            CodPostal:
                            <input type="text" name="CodPostal" value={novoCliente.CodPostal} onChange={this.handleInputChange} />
                            </label>
                            <label>
                            Email:
                            <input type="email" name="Email" value={novoCliente.Email} onChange={this.handleInputChange} />
                            </label>
                            <label>
                            Password:
                            <input type="password" name="Password" value={this.state.password} onChange={this.handleInputChange} />
                            </label>
                            <label>
                            Telemovel:
                            <input type="text" name="Telemovel" value={novoCliente.Telemovel} onChange={this.handleInputChange} />
                            </label>
                            <label>
                            NIF:
                            <input type="text" name="Nif" value={novoCliente.Nif} onChange={this.handleInputChange} />
                            </label>
                            <button type="submit">Create</button>
                        </form> 
                        <p> <a href="#" onClick={this.handleButtonClick} >Tenho conta</a></p>  
                    </div>}
                    {entrar && <div >
                        <h2>Login</h2>
                        <form onSubmit={this.handleLogin}>
                            <label>
                            Email:
                            <input type="email" name="Email" placeholder="Email" value={UserLogin.Email} onChange={this.handleInputChangeLogin} />
                            </label>
                            <label>
                            Login:
                            <input type="password" name="Password" placeholder="Password" value={UserLogin.Password} onChange={this.handleInputChangeLogin}/>
                            </label>
                            <button type="submit">Login</button>
                        </form>    
                        <p>Não têm conta? <a href="#" onClick={this.handleButtonClick} >Registe-se</a></p>  
                    </div>}
                    
                </div>
                ) : (
                    <div class="offcanvas-body">
                        <div>
                            <ul class="list-group">
                                {listaPerfil}
                            </ul>
                        </div>
                        <button onClick={() => this.logout()}>LOGOUT</button> 
                    </div>
                )}
            </div>
                
        );
    }
}

export default Login;