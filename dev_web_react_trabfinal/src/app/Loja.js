import logo from '../logo.svg';
import React, { Component } from 'react';
import Cliente from './Cliente';
import Reparacao from './Reparacao';

class Loja extends Component {
    state = { troca: 0 }

    trocaLoja(){ this.setState({troca: 0}); }
    trocaCliente(){ this.setState({troca: 1}); }
    trocaReparacao(){ this.setState({troca: 2}); }

    render() {
        switch (this.state.troca) {
            case 0:
                return (
                    <>
                        <section className='loja'>
                            <h1>Ullamco incididunt dolore pariatur adipisicing.</h1>
                            <p>Velit sint pariatur tempor non et enim. Sint minim sunt sit ea qui duis deserunt. Eiusmod veniam aute labore eu incididunt dolor commodo elit incididunt reprehenderit cillum adipisicing incididunt. Eu labore eu consectetur duis irure elit quis pariatur ad elit. <br/>Deserunt voluptate officia qui excepteur qui Lorem occaecat exercitation sint eu id. Culpa aliqua eu deserunt cillum et anim occaecat officia cupidatat.</p>
                            <a href='#' className='hero-btn' onClick={() => this.trocaCliente()}>CARALHO1!!!</a>
                        </section>
                    </>
                );
            case 1:
                return (
                    <Cliente
                        troca={this.state.troca}
                        trocaLoja={() => (this.trocaLoja())}
                        trocaReparacao={() => (this.trocaReparacao())}
                    />
                );
            case 2:
                return (
                    <Reparacao
                        troca={this.state.troca}
                        trocaLoja={() => (this.trocaLoja())}
                        trocaCliente={() => (this.trocaCliente())}
                    />
                );
            default: console.log("FÓNIX!!!!!")
        }
    }
}

export default Loja;