import "./Login.css"
import React, { Component } from 'react';


class Login extends Component {
    constructor(props) {
        super(props);      
    }

    // variável state com as variaveis necessarias
    state = {
        // Objeto para registo do Cliente + string Password
        novoCliente:{
            "Nome": "",
            "Nif": "",
            "Morada": "",
            "CodPostal": "",
            "Email": "",
            "Telemovel": "",
        }, password: "",
        // Objeto para o Login
        UserLogin: {
            Email: "", 
            Password: ""
        }, 
        // Variavel do estado do Login
        isLogged: false, 
        // Id do Cliente logado na app
        LogId: null,
        // Lista de informação do Cliente
        listaPerfil:[],
        // Variaveis de controlo da view do Login, Registo
        registo: false, entrar: true
    }

    // -------------------------------------------- REGISTO --------------------------------------------

    // Função que controla o update dos valores dos inputs da form do Registo
    handleInputChange = (event) => {
        // vai buscar nome e valor do input
        const { name, value } = event.target;
        // cheack para ver se é a Password a ser modificada
        if (name === "Password"){
            // atualiza o state da password
            this.setState({ password: value});
        }
        // atualiza o state do objeto novoCliente
        this.setState(prevState => ({
            novoCliente: {
            ...prevState.novoCliente,
            [name]: value
            }
        }));
    };

    // Função que faz submit do Registo do novo Cliente
    handleSubmit = (event) => {
        event.preventDefault();
        // vai buscar o objeto novoCliente e a password
        const { novoCliente, password } = this.state;
        // console.log(novoCliente, password);
        // chama a função meterDadosCliente com o Objeto e password
        this.meterDadosCliente(novoCliente, password);
        // Limpa a form
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
    
    // Função que faz o POST na API com o objeto (obj) novoCliente e password(password)
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

        // faz o fetch com a password no URL
        fetch("https://localhost:7294/api/ClientesAPI/create?password=" + password, resquestOptions)
            .then(res => res.json())
            .then(result => {console.log(result);
                //Refresh na lista dos clientes
                this.props.buscar()
            })
            .catch(error => console.log("error", error));
    }

    // -------------------------------------------- LOGIN --------------------------------------------

    // Função que controla o update dos valores dos inputs da form do Login
    handleInputChangeLogin = (event) => {
        // vai buscar nome e valor do input
        const { name, value } = event.target;
        // atualiza o state do objeto UserLogin
        this.setState(prevState => ({
            UserLogin: {
                ...prevState.UserLogin,
                [name]: value
            }
        }));
    };

    // Função que faz submit do Login do Cliente
    handleLogin = (event) => {
        event.preventDefault();
        // vai buscar o objeto UserLogin
        const { UserLogin } = this.state;
        // console.log( UserLogin );
        // chama a função login com o Objeto
        this.login(UserLogin);
        // Limpa a form
        this.setState({
            UserLogin: {
                Email: "",
                Password: "",
            }
        });
    };

    // Função que faz o login do utilizador na app
    login (obj){
        var requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(obj)
        };
        
        fetch("https://localhost:7294/api/ClientesAPI/login", requestOptions)
        .then(response => {
            // check para saber se a response é um erro 400 (Bad Request)
            if (response.status === 400) {
                throw new Error("400");
            }
            return response.json()
        })
        .then((result) => {
            if (result) {
                // muda o state da variavel isLogged
                this.state.isLogged = true;
                // muda o state da variavel LogId com o Id recebido
                this.state.LogId = result.clienteId;
                // Guarda o estado de Login e o Id no componente pai(Loja.js)
                this.props.LoginStatus(true, result.clienteId)
                // espera 500 milisegundos(0.5s) e chama a função buscarInfoCliente
                setTimeout(() => {this.buscarInfoCliente(this.state.LogId);},"500");
                // console.log("LOGIN FEITO!", this.state.isLogged, this.state.LogId );
            } else {
                console.log("Login failed");
            }
        })
        .catch((error) => {
            // check para ver se o erro é do tipo 400
            if( error.message === "400") {
                console.log("Login failed");
            }
            console.log(error);
        });     
    };
    
    // Função que faz o logout do utilizador na app
    logout (){
        var requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
        };

        fetch("https://localhost:7294/api/ClientesAPI/logout", requestOptions)
        .then(response => response.json())
        .then((result) => {
            if (result) {
                // muda o state da variavel isLogged
                this.state.isLogged = false;
                // muda o state da variavel LogId para apagar o Id
                this.state.LogId = null;
                // Guarda o estado de Login no componente pai(Loja.js)
                this.props.LoginStatus(false,null);
                // limpa a listaPerfil
                this.state.listaPerfil.splice(0,this.state.listaPerfil.length);
                // console.log("LOGIN FEITO!", this.state.isLogged, this.state.LogId );
            } else {
                throw new Error("Logout failed");
            }
        })
        .catch((error) => {
            console.log(error);
        });
        // chama a função scrollToLoja
        this.scrollToLoja();
    };

    // Função para faz scroll para o topo da Página
    scrollToLoja = () => {
        const lojaSection = document.getElementById('sec');
        if (lojaSection) {
            lojaSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Função que controla a troca entre a Views de Login e Registo
    handleButtonClick = () => {
        // muda o state da variaveis
        this.setState({
          registo: !this.state.registo,
          entrar: !this.state.entrar
        });
    };

    // Função para ir buscar a informação do Cliente logado na app e meter-la numa lista
    buscarInfoCliente(id) {
        // chama a função para fazer o fetch da informação do cliente
        this.props.buscarCliente(id);
        // espera 500 milisegundos(0.5s) e executa o seguinte
        setTimeout(() => {
            // console.log(this.props.dados);
            // defina a variavel para ListaPerfil no state
            let listaPerfil = this.state.listaPerfil;
            // check para ver os dados do Cliente recebidos são do tipo Objeto
            if (typeof this.props.dados === "object") {
                // para cada tipo de dados dentro do objeto faz o seguinte
                Object.keys(this.props.dados).forEach((key) => {
                    // cheack para não mostrar o "id", "userId" e "listaDipostivos"
                    if (key !== "id" && key !== "userId" && key !== "listaDipositivos") {
                        // definir variavel displayNome
                        let displayNome = "";
                        // definir variavel para cada tipo de dados no objeto
                        const value = this.props.dados[key];
                        // switch para mudar a variavel Nome dependo do tipo de dados
                        switch (key) {
                            case "nome":
                                displayNome = "Nome";
                            break;
                            case "nif":
                                displayNome = "NIF";
                            break;
                            case "morada":
                                displayNome = "Morada";
                            break;
                            case "codPostal":
                                displayNome = "Código Postal";
                            break;
                            case "email":
                                displayNome = "Email";
                            break;
                            case "telemovel":
                                displayNome = "Telemovel";
                            break;
                            default:
                                displayNome = key; 
                            break;
                        }
                        // mete na ListaPerfil os valores
                        listaPerfil.push(
                            <li className="list-group-item">
                                <div>{displayNome} : {value}</div>
                            </li>
                        );
                    }
                });
                // muda o state de ListaPerfil no state
                this.setState({ listaPerfil }); 
            }
        }, "500");
        // espera 500 milisegundos(0.5s) e chama a função scrollToAreaCliente
        setTimeout(() => {this.scrollToAreaCliente()}, "500");          
    }

    // Função para faz scroll para a Area do Cliente
    scrollToAreaCliente = () => {
        const areaClienteSection = document.getElementById('areaCliente');
        if (areaClienteSection) {
            areaClienteSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    render() {

        // define varieaveis de acordo com as variveis do state
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
                <div className="offcanvas-header">
                    <a type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></a>
                </div> 
                {/* check para ver se isLogged é true*/}
                {!isLogged ? (
                <div className="offcanvas-body"  style={{ paddingTop: registo ? '100px' : '200px' }}>

                    {/* check para ver se regsito é true*/}
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

                    {/* check para ver se entrar é true*/}
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
                                {/* Lista no Perfil do Cliente logado*/}
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