import React, { Component } from 'react';
import "./Navbar.css";

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    scrollToLoja = () => {
        const lojaSection = document.getElementById('sec');
        if (lojaSection) {
            lojaSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    scrollToAreaEspecializacao = () => {
        const areaEspecializacaoSection = document.getElementById('areaEspecializacao');
        if (areaEspecializacaoSection) {
            areaEspecializacaoSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    scrollToAreaCliente  = () => {
        const areaClienteSection = document.getElementById('areaCliente');
        if (areaClienteSection) {
            areaClienteSection.scrollIntoView({ behavior: 'smooth' });
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
            <div id='sec' className='sec'>
                <nav className='navbar fixed-top navbar-dark'>
                    <a class="navbar-brand logo" href=''>ReparaTECH</a>
                    <div className='nav-links'>
                        <ul>
                            <li class="nav-item"><a class="nav-link" onClick={this.scrollToLoja}>Início</a></li>
                            <li class="nav-item"><a class="nav-link" onClick={this.scrollToAreaEspecializacao}>Especializações</a></li>
                            <li class="nav-item"><a class="nav-link" onClick={this.scrollToAreaCliente}>Área do Cliente</a></li>
                            {/* <li class="nav-item"><a class="nav-link" onClick={this.scrollToDispositivo}>Dispositivos</a></li>
                            <li class="nav-item"><a class="nav-link" onClick={this.scrollToReparacao}>Reparação</a></li> */}
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