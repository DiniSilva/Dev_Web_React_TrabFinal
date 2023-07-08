import "./Loja.css"

import React, { Component } from 'react';
import Cliente from './Cliente';
import Reparacao from './Reparacao';
import Funcionario from './Funcionario';
import Dispositivo from './Dispositivo';
import Login from './Login';
import Navbar from './Navbar';

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
     
    /*------------ Render ------------*/

    render() {
        //const {novoCliente}= this.state;
        
        return (
            <>
                <Navbar />

                <Login buscar={() => { this.buscarDadosClientes() }}
                    LoginStatus={(logged, id) => {this.handelLoginStatus(logged, id)}}
                    dados={this.state.dadosCliente}
                    buscarCliente={(id) => {this.buscarCliente(id)}}
                />

                <section className='loja'>
                    <h1>Bem-vindo a ReparaTECH!</h1>
                    <h4>A sua referência confiável para reparação dos vossos diversos Dispositivos Eletrónicos! Contamos com uma equipa de técnicos altamente qualificados e experientes, prontos para ajudar em todas as situações.</h4>
                    
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

                <section id="dispositivo" className='dispositivo'>
                <Dispositivo listaDispositivos={this.state.listaDispositivos} listaReparacaos={this.state.listaReparacaos}
                    buscarDispositivo={(id) => { this.buscarDispositivo(id) }}
                    logged={this.state.isLogged} logid={this.state.LogId}
                    
                />
                </section>

            </>
        );
        
    }
}

export default Loja;