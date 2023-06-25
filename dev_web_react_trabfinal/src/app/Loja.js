import logo from '../logo.svg';

import React, { Component } from 'react';
import Cliente from './Cliente';
import Reparacao from './Reparacao';

class Loja extends Component {
    state = { listaClientes: [], dadoClientes: null }

    async componentDidMount(){
        this.buscarDadosIniciais();
    }

    async buscarDadosIniciais(){
        var requestOptions = {
            method: "GET",
            redirect: "follow"
        };
        
        fetch("https://localhost:7294/api/ClientesAPI", requestOptions)
        .then(response => response.json())
        .then(result => this.setState({ listaClientes: result }))
        .catch(error => console.log("error", error));
    }
        
    buscarDados(id){
        fetch("https://localhost:7294/api/ClientesAPI" + id)
        .then(response => response.json())
        .then(result => this.setState({ dadoClientes: result }))
        .catch(error => console.log("error", error));
    }

    render() {
        return (
            <>
                <section className='loja'>
                    <h1>Ullamco incididunt dolore pariatur adipisicing.</h1>
                    <p>Velit sint pariatur tempor non et enim. Sint minim sunt sit ea qui duis deserunt. Eiusmod veniam aute labore eu incididunt dolor commodo elit incididunt reprehenderit cillum adipisicing incididunt. Eu labore eu consectetur duis irure elit quis pariatur ad elit. <br/>Deserunt voluptate officia qui excepteur qui Lorem occaecat exercitation sint eu id. Culpa aliqua eu deserunt cillum et anim occaecat officia cupidatat.</p>
                    <a href='#' className='hero-btn' onClick={() => this.trocaCliente()}>Reparações</a>
                </section>
                <Cliente
                />
                <Reparacao lista={this.state.listaClientes}
                    buscarDados={(id) => { this.buscarDados(id) }}
                />
            </>
        );
        
    }
}

export default Loja;