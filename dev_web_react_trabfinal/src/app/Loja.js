import logo from '../logo.svg';
import "./Loja.css"

import React, { Component } from 'react';
import Cliente from './Cliente';
import Reparacao from './Reparacao';
import Funcionario from './Funcionario';
import Dispositivo from './Dispositivo';

class Loja extends Component {
    state = { 
        listaClientes: [], dadosCliente: null,
        listaFuncionarios:[], dadosFuncionario: null,
        listaDispositivos:[], dadosDispositivo: null,
        listaReparacaos:[], dadosReparacao: null,
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
        }, isLogged: false  
    }

    async componentDidMount(){
        this.buscarDadosClientes();
        this.buscarDadosFuncionarios();
        this.buscarDadosDispositivos();
        this.buscarDadosReparacao();
    }

    /*----------------------------------------------------------------------------*/

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
        .then((response) => {
            if (response.ok) {
                this.state.isLogged = true;
                console.log("LOGIN FEITO!", this.state.isLogged );
            } else {
                throw new Error("Login failed");
            }
        })
        .catch((error) => {
            console.log(error);
        });
    };

    logout (){
        var requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
        };

        fetch("https://localhost:7294/api/ClientesAPI/logout", requestOptions)
        .then((response) => {
            if (response.ok) {
                this.state.isLogged = false;
                console.log("LOGOUT FEITO!", this.state.isLogged );
            } else {
                throw new Error("Logout failed");
            }
        })
        .catch((error) => {
            console.log(error);
        });
    };

    /*----------------------------------------------------------------------------*/

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
    
    /*----------------------------------------------------------------------------*/

    async buscarDadosClientes(){
        var requestOptions = {
            method: "GET",
            redirect: "follow"
        };
        
        fetch("https://localhost:7294/api/ClientesAPI", requestOptions)
        .then(response => response.json())
        .then(result => this.setState({ listaClientes: result }))
        .catch(error => console.log("error", error));
    }
    
    
    buscarCliente(id){
        fetch("https://localhost:7294/api/ClientesAPI" + id)
        .then(response => response.json())
        .then(result => this.setState({ dadosCliente: result }))
        .catch(error => console.log("error", error));
    }

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
                this.buscarDadosClientes()
            })
            .catch(error => console.log("error", error));
    }

    /*----------------------------------------------------------------------------*/

    async buscarDadosFuncionarios(){
        var requestOptions = {
            method: "GET",
            redirect: "follow"
        };
        
        fetch("https://localhost:7294/api/FuncionariosAPI", requestOptions)
        .then(response => response.json())
        .then(result => this.setState({ listaFuncionarios: result }))
        .catch(error => console.log("error", error));
    }
    
    
    buscarFuncionario(id){
        fetch("https://localhost:7294/api/FuncionariosAPI" + id)
        .then(response => response.json())
        .then(result => this.setState({ dadosFuncionario: result }))
        .catch(error => console.log("error", error));
    }

    meterDadosFuncionario(obj){
        var resquestOptions = {
            method: "POST",
            redirect: "follow",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(obj)
        };

        fetch("https://localhost:7294/api/FuncionariosAPI/create", resquestOptions)
            .then(res => res.json())
            .then(result => {console.log(result);
                //Refresh ma lista dos funcionarios
                this.buscarDadosFuncionarios()
            })
            .catch(error => console.log("error", error));
    }
    
    /*----------------------------------------------------------------------------*/

    async buscarDadosDispositivos(){
        var requestOptions = {
            method: "GET",
            redirect: "follow"
        };
        
        fetch("https://localhost:7294/api/DispositivosAPI", requestOptions)
        .then(response => response.json())
        .then(result => this.setState({ listaDispositivos: result }))
        .catch(error => console.log("error", error));
    }
    
    
    buscarDispositivo(id){
        fetch("https://localhost:7294/api/DispositivosAPI" + id)
        .then(response => response.json())
        .then(result => this.setState({ dadosDispositivo: result }))
        .catch(error => console.log("error", error));
    }

    /*----------------------------------------------------------------------------*/

    async buscarDadosReparacao(){
        var requestOptions = {
            method: "GET",
            redirect: "follow"
        };
        
        fetch("https://localhost:7294/api/ReparacaosAPI", requestOptions)
        .then(response => response.json())
        .then(result => this.setState({ listaReparacaos: result }))
        .catch(error => console.log("error", error));
    }
    
    
    buscarReparacao(id){
        fetch("https://localhost:7294/api/ReparacaosAPI" + id)
        .then(response => response.json())
        .then(result => this.setState({ dadosReparacao: result }))
        .catch(error => console.log("error", error));
    }

    /*----------------------------------------------------------------------------*/



    openNav() {
        document.getElementById("mySidebar").style.width = "500px";
    }

    closeNav() {
        document.getElementById("mySidebar").style.width = "0px";
    }
    
    render() {
        //const {novoCliente}= this.state;
        let novoCliente = this.state.novoCliente;
        let UserLogin = this.state.UserLogin;
        return (
            <>
                <div className='sec'>
                    <nav className='navbar fixed-top navbar-dark'>
                        <a class="navbar-brand" href=''><img src='https://cdn.icon-icons.com/icons2/2620/PNG/512/among_us_player_red_icon_156942.png' class="d-inline-block"></img>Amogus</a>
                        <div className='nav-links'>
                            <ul>
                                <li class="nav-item"><a class="nav-link" onClick={() => this.openNav()}>&#9776; HOME</a></li>
                                <li class="nav-item"><a class="nav-link" href=''>About</a></li>
                                <li class="nav-item"><a class="nav-link" href=''>Course</a></li>
                                <li class="nav-item"><a class="nav-link" href=''>IDK</a></li>
                                <li class="nav-item"><a class="nav-link" href=''>HOE</a></li>
                            </ul>
                        </div>
                        <div className='blur'></div> 
                    </nav>
                </div>

                <div id="mySidebar" class="sidebar ">
                    <a href="javascript:void(0)" class="closebtn" onClick={() => this.closeNav()}>&times;</a>
                    {this.state.isLogged ? (
                        <>
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
                        </>
                    ) : (
                        <>
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
                    </>
                    )}
                </div>

                <section className='loja'>
                    <h1>Ullamco incididunt dolore pariatur adipisicing.</h1>
                    <p>Velit sint pariatur tempor non et enim. Sint minim sunt sit ea qui duis deserunt. Eiusmod veniam aute labore eu incididunt dolor commodo elit incididunt reprehenderit cillum adipisicing incididunt. Eu labore eu consectetur duis irure elit quis pariatur ad elit. <br/>Deserunt voluptate officia qui excepteur qui Lorem occaecat exercitation sint eu id. Culpa aliqua eu deserunt cillum et anim occaecat officia cupidatat.</p>
                    <a href='#' className='hero-btn' onClick={() => this.openNav()}>&#9776; Open Sidebar</a>
                    <button onClick={() => this.logout()}>LOGOUT</button>
                </section>
                <Cliente
                />
                <Reparacao lista={this.state.listaClientes}
                    buscarCliente={(id) => { this.buscarCliente(id) }}
                />
                <Funcionario lista={this.state.listaFuncionarios}
                    buscarFuncionario={(id) => { this.buscarFuncionario(id) }}
                />
                <Dispositivo lista={this.state.listaDispositivos}
                    buscarDispositivo={(id) => { this.buscarDispositivo(id) }}
                />
            </>
        );
        
    }
}

export default Loja;