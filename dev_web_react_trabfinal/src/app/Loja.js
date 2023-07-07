import logo from '../logo.svg';
import "./Loja.css"

import React, { Component } from 'react';
import Cliente from './Cliente';
import Reparacao from './Reparacao';
import Funcionario from './Funcionario';
import Dispositivo from './Dispositivo';
import Login from './Login';

class Loja extends Component {
    // variável state com as variaveis necessarias
    state = { 
        // Array e variavel referentes aos Clientes
        listaClientes: [], dadosCliente: null,
        // Array e variavel referentes aos Funcionários
        listaFuncionarios:[], dadosFuncionario: null,
        // Array e variavel referentes aos Dispositivos
        listaDispositivos:[], dadosDispositivo: null,
        // Array e variavel referentes ás Reparações
        listaReparacaos:[], dadosReparacao: null,
        // Variaveis referentes ao Login da app
        isLogged: false, LogId: null
    }

    // função para buscar á API os dados necessários quando a app é montada
    async componentDidMount(){
        // Dados dos Clientes
        this.buscarDadosClientes();
        // Dados dos Funcionários
        this.buscarDadosFuncionarios();
        // Dados dos Dispostivos
        this.buscarDadosDispositivos();
        // Dados dos Reparações
        this.buscarDadosReparacao();
    }

    /*---------------------------------- Cliente ----------------------------------*/

    // Buscar a lista de Clientes á API
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
    
    // Buscar os dados de um Cliente á API 
    buscarCliente(id){
        fetch("https://localhost:7294/api/ClientesAPI/" + id)
        .then(response => response.json())
        .then(result => this.setState({ dadosCliente: result },() => {console.log(this.state.dadosCliente)}))
        .catch(error => console.log("error", error));
    }

    /*---------------------------------- Funcionário ----------------------------------*/

    // Buscar a lista de Funcionários á API
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
    
    // Buscar os dados de um Funcionário á API 
    buscarFuncionario(id){
        fetch("https://localhost:7294/api/FuncionariosAPI/" + id)
        .then(response => response.json())
        .then(result => this.setState({ dadosFuncionario: result }))
        .catch(error => console.log("error", error));
    }
    
    /*---------------------------------- Dispositivo ----------------------------------*/

    // Buscar a lista de Dispositivos á API
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
    
    // Buscar os dados de um Dispostitvo á API 
    buscarDispositivo(id){
        fetch("https://localhost:7294/api/DispositivosAPI/" + id)
        .then(response => response.json())
        .then(result => this.setState({ dadosDispositivo: result }))
        .catch(error => console.log("error", error));
    }

    /*---------------------------------- Reparações ----------------------------------*/

    // Buscar a lista de Reparações á API
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
    
    // Buscar os dados de uma Reparação á API 
    buscarReparacao(id){
        fetch("https://localhost:7294/api/ReparacaosAPI/" + id)
        .then(response => response.json())
        .then(result => this.setState({ dadosReparacao: result }))
        .catch(error => console.log("error", error));
    }

    /*---------------------------------- Login ----------------------------------*/

    // função para guardar o ID do Cliente e se está logado na app
    handelLoginStatus = (logged, id) => {
        this.setState({
            isLogged: logged,
            LogId: id
        });
    };

    /*---------------------------------- Estética da App ----------------------------------*/

    scrollToFuncionario = () => {
        const funcionarioSection = document.getElementById('funcionario');
        if (funcionarioSection) {
          funcionarioSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
     
    /*------------ Render ------------*/

    render() {
        //const {novoCliente}= this.state;
        
        return (
            <>
                <div className='sec'>
                    <nav className='navbar fixed-top navbar-dark'>
                        <a class="navbar-brand" href=''><img src='https://cdn.icon-icons.com/icons2/2620/PNG/512/among_us_player_red_icon_156942.png' class="d-inline-block"></img>Amogus</a>
                        <div className='nav-links'>
                            <ul>
                                <li class="nav-item"><a class="nav-link"  data-bs-toggle='offcanvas' data-bs-target='#sidebar' aria-controls='sidebar'>&#9776; HOME</a></li>
                                <li class="nav-item"><a class="nav-link" onClick={this.scrollToFuncionario}>Funcionarios</a></li>
                                <li class="nav-item"><a class="nav-link" href=''>Course</a></li>
                                <li class="nav-item"><a class="nav-link" href=''>IDK</a></li>
                                <li class="nav-item"><a class="nav-link" href=''>HOE</a></li>
                            </ul>
                        </div>
                        <div className='blur'></div> 
                    </nav>
                </div>

                <Login buscar={() => { this.buscarDadosClientes() }}
                    LoginStatus={(logged, id) => {this.handelLoginStatus(logged, id)}}
                    dados={this.state.dadosCliente}
                    buscarCliente={(id) => {this.buscarCliente(id)}}
                />

                <section className='loja'>
                    <h1>Ullamco incididunt dolore pariatur adipisicing.</h1>
                    <p>Velit sint pariatur tempor non et enim. Sint minim sunt sit ea qui duis deserunt. Eiusmod veniam aute labore eu incididunt dolor commodo elit incididunt reprehenderit cillum adipisicing incididunt. Eu labore eu consectetur duis irure elit quis pariatur ad elit. <br/>Deserunt voluptate officia qui excepteur qui Lorem occaecat exercitation sint eu id. Culpa aliqua eu deserunt cillum et anim occaecat officia cupidatat.</p>
                    <a href='#' className='hero-btn'  data-bs-toggle='offcanvas' data-bs-target='#sidebar' aria-controls='sidebar'>&#9776; Open Sidebar</a>
                </section>
                
                <Cliente />

                <Reparacao lista={this.state.listaClientes}
                    buscarCliente={(id) => { this.buscarCliente(id) }}
                />

                <section id="funcionario" className='funcionario'>
                    <Funcionario listaFuncionarios={this.state.listaFuncionarios}
                        buscarFuncionario={(id) => { this.buscarFuncionario(id) }}
                    />
                </section>

                <Dispositivo listaDispositivos={this.state.listaDispositivos} listaReparacaos={this.state.listaReparacaos}
                    buscarDispositivo={(id) => { this.buscarDispositivo(id) }}
                    logged={this.state.isLogged} logid={this.state.LogId}
                />

            </>
        );
        
    }
}

export default Loja;