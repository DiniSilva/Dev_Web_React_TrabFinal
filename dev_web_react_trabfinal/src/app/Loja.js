import logo from '../logo.svg';
import "./Loja.css"

import React, { Component } from 'react';
import Cliente from './Cliente';
import Reparacao from './Reparacao';
import Funcionario from './Funcionario';
import Dispositivo from './Dispositivo';
import Login from './Login';

class Loja extends Component {
    state = { 
        listaClientes: [], dadosCliente: "",
        listaFuncionarios:[], dadosFuncionario: null,
        listaDispositivos:[], dadosDispositivo: null,
        listaReparacaos:[], dadosReparacao: null,
        isLogged:false, LogId:null
    }

    async componentDidMount(){
        this.buscarDadosClientes();
        this.buscarDadosFuncionarios();
        this.buscarDadosDispositivos();
        this.buscarDadosReparacao();
    }

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
        fetch("https://localhost:7294/api/ClientesAPI/" + id)
        .then(response => response.json())
        .then(result => this.setState({ dadosCliente: result },() => {console.log(this.state.dadosCliente)}))
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
        fetch("https://localhost:7294/api/FuncionariosAPI/" + id)
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
        fetch("https://localhost:7294/api/DispositivosAPI/" + id)
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
        fetch("https://localhost:7294/api/ReparacaosAPI/" + id)
        .then(response => response.json())
        .then(result => this.setState({ dadosReparacao: result }))
        .catch(error => console.log("error", error));
    }

    /*----------------------------------------------------------------------------*/

    handelLoginStatus = (logged, id) => {
        this.setState({
            isLogged: logged,
            LogId: id
        });
    };
        
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
                                <li class="nav-item"><a class="nav-link" href=''>About</a></li>
                                <li class="nav-item"><a class="nav-link" href=''>Course</a></li>
                                <li class="nav-item"><a class="nav-link" href=''>IDK</a></li>
                                <li class="nav-item"><a class="nav-link" href=''>HOE</a></li>
                            </ul>
                        </div>
                        <div className='blur'></div> 
                    </nav>
                </div>
                <button className='btn btn-primary' type='button' data-bs-toggle='offcanvas' data-bs-target='#sidebar' aria-controls='sidebar'></button>
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