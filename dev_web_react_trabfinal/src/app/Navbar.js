import React, { Component } from 'react';
import "./Navbar.css";

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    scrollToTopo = () => {
        const topoSection = document.getElementById('topo');
        if (topoSection) {
            topoSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    scrollToFuncionario = () => {
        const funcionarioSection = document.getElementById('funcionario');
        if (funcionarioSection) {
          funcionarioSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    scrollToCliente = () => {
        const clienteSection = document.getElementById('cliente');
        if (clienteSection) {
            clienteSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    scrollToDispositivo = () => {
        const dispositivoSection = document.getElementById('dispositivo');
        if (dispositivoSection) {
            dispositivoSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    scrollToReparacao = () => {
        const reparacaoSection = document.getElementById('reparacao');
        if (reparacaoSection) {
            reparacaoSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    render() {
        return (
            <div className='sec'>
                <nav className='navbar fixed-top navbar-dark'>
                    <a class="navbar-brand logo" href=''>ReparaTECH</a>
                    <div className='nav-links'>
                        <ul>
                            <li class="nav-item"><a class="nav-link" onClick={this.scrollToTopo}>HOME</a></li>
                            <li class="nav-item"><a class="nav-link" onClick={this.scrollToFuncionario}>Funcionários</a></li>
                            <li class="nav-item"><a class="nav-link" onClick={this.scrollToCliente}>Clientes</a></li>
                            <li class="nav-item"><a class="nav-link" onClick={this.scrollToDispositivo}>Dispositivos</a></li>
                            <li class="nav-item"><a class="nav-link" onClick={this.scrollToReparacao}>Reparação</a></li>
                            <li class="nav-item"><a class="nav-link" data-bs-toggle='offcanvas' data-bs-target='#sidebar' aria-controls='sidebar'>LogIn &#9776;</a></li>
                        </ul>
                    </div>
                    <div className='blur'></div> 
                </nav>
            </div>
        );
    }
}

export default Navbar;