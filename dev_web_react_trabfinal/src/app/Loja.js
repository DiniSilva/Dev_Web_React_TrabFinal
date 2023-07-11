import "./Loja.css"

import React, { Component } from 'react';
import AreaEspecializacao from './AreaEspecializacao';
import AreaCliente from './AreaCliente';
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
        // Converte a resposta para JSON
        .then(response => response.json())
        // Atualiza o state com os dados da resposta 
        .then(result => this.setState({ listaClientes: result }))
        // Trata erros caso estes ocorram 
        .catch(error => console.log("error", error));
    }
    
    // Buscar os dados de um Cliente á API 
    buscarCliente(id){
        // Faz a requisição GET para a API com o ID específico
        fetch("https://localhost:7294/api/ClientesAPI/" + id)
        // Converte a resposta para JSON
        .then(response => response.json())
        // Atualiza o state com os dados do cliente encontrado   
        .then(result => this.setState({ dadosCliente: result })) //,() => {console.log(this.state.dadosCliente)}
        // Trata erros caso estes ocorram 
        .catch(error => console.log("error", error));
    }

    /*---------------------------------- Funcionário ----------------------------------*/

    // Buscar a lista de Funcionários á API
    async buscarDadosFuncionarios(){
        var requestOptions = {
            method: "GET",
            redirect: "follow"
        };
        // Faz a requisição GET para a API
        fetch("https://localhost:7294/api/FuncionariosAPI", requestOptions)
        // Converte a resposta para JSON
        .then(response => response.json()) 
        // Atualiza o state com os dados da resposta                                    
        .then(result => this.setState({ listaFuncionarios: result }))         
        // Trata erros caso estes ocorram 
        .catch(error => console.log("error", error));                          
    }
    
    // Buscar os dados de um Funcionário á API 
    buscarFuncionario(id){
        // Faz a requisição GET para a API com o ID específico
        fetch("https://localhost:7294/api/FuncionariosAPI/" + id)
        // Converte a resposta para JSON
        .then(response => response.json())                      
        // Atualiza o state com os dados do funcionário encontrado                
        .then(result => this.setState({ dadosFuncionario: result }))     
        // Trata erros caso estes ocorram      
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
        // Converte a resposta para JSON
        .then(response => response.json())
        // Atualiza o state com os dados da resposta  
        .then(result => this.setState({ listaDispositivos: result }))
        // Trata erros caso estes ocorram   
        .catch(error => console.log("error", error));
    }
    
    // Buscar os dados de um Dispostitvo á API 
    buscarDispositivo(id){
        // Faz a requisição GET para a API com o ID específico
        fetch("https://localhost:7294/api/DispositivosAPI/" + id)
        // Converte a resposta para JSON
        .then(response => response.json())
        // Atualiza o state com os dados do dispositivo encontrado   
        .then(result => this.setState({ dadosDispositivo: result }))
        // Trata erros caso estes ocorram   
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
        // Converte a resposta para JSON
        .then(response => response.json())
        // Atualiza o state com os dados da resposta  
        .then(result => this.setState({ listaReparacaos: result }))
        // Trata erros caso estes ocorram   
        .catch(error => console.log("error", error));
    }
    
    // Buscar os dados de uma Reparação á API 
    buscarReparacao(id){
        // Faz a requisição GET para a API com o ID específico
        fetch("https://localhost:7294/api/ReparacaosAPI/" + id)
        // Converte a resposta para JSON
        .then(response => response.json())
        // Atualiza o state com os dados da reparacao encontrado   
        .then(result => this.setState({ dadosReparacao: result }))
        // Trata erros caso estes ocorram   
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
                {/*referência do componente Barra de Navegação*/}
                <Navbar
                    /*variavel de verificação do estado de login*/
                    logged={this.state.isLogged} 
                />
                {/*referência do componente Login*/}
                <Login 
                    buscar={() => { this.buscarDadosClientes() }}
                    LoginStatus={(logged, id) => {this.handelLoginStatus(logged, id)}}
                    /*dados do clinte que realizou login*/
                    dados={this.state.dadosCliente}
                    /*obtem dados do cliente dependendo do id */
                    buscarCliente={(id) => {this.buscarCliente(id)}}
                />

                <section id="loja" className='loja'>
                    <h1>Bem-vindo a ReparaTECH!</h1>
                    <h3>A sua referência confiável para reparação dos vossos diversos Dispositivos Eletrónicos! Contamos com uma equipa de técnicos altamente qualificados e experientes, prontos para ajudar em todas as situações.</h3>   
                </section>
                <br></br>
                <br></br>
                <section id="areaEspecializacao" className='areaEspecializacao'>
                    {/*referência do componente área de especialiação*/}
                    <AreaEspecializacao 
                        //lista de funcionários
                        listaFuncionarios={this.state.listaFuncionarios}
                    />
                </section>
                <br></br>
                <br></br>
                <section id="areaCliente" className='areaCliente' >
                      {/*referência do componente área de cliente*/}
                    <AreaCliente 
                        //lista de dispositivos
                        listaDispositivos={this.state.listaDispositivos} 
                        //lista de reparações
                        listaReparacaos={this.state.listaReparacaos}
                         /*variavel de verificação do estado de login e variavel que contêm o id do utilizador*/
                        logged={this.state.isLogged} logid={this.state.LogId}
                    />
                </section>
                <br></br>
            </>
        );
        
    }
}

export default Loja;