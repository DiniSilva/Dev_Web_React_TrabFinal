import logo from '../logo.svg';
import React, { Component } from 'react';
import Cliente from './Cliente';

class Loja extends Component {
    constructor(props) {
        super(props);
        this.state = { troca: 0 };
    }

    trocaFunc(){
        this.setState({troca: 0});
    }

    trocaCliente(){
        this.setState({troca: 1});
    }

    render() {
        switch (this.state.troca) {
            case 0:
                return (
                    <>
        
                        <img src={logo} className="App-logo" alt="logo" />
                            <p>
                                Edit <code>src/App.js</code> and save to reload.
                            </p>
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn React
                        </a>
                        <button onClick={() => this.trocaCliente()}>LMAO</button>
                    </>      
                );
            case 1:
                return (
                    <Cliente
                        troca={this.state.troca}
                        trocaFunc={() => (this.trocaFunc())}
                    />
                );
            default: console.log("FÓNIX!!!!!")
        }
    }
}

export default Loja;