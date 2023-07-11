import React, { Component } from 'react';
import "./Navbar.css";

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    //função que faz scroll para o topo da loja
    scrollToLoja = () => {
        const lojaSection = document.getElementById('sec');
        if (lojaSection) {
            lojaSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    //função que faz scroll para a area de especialização
    scrollToAreaEspecializacao = () => {
        const areaEspecializacaoSection = document.getElementById('areaEspecializacao');
        if (areaEspecializacaoSection) {
            areaEspecializacaoSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    //função que faz scroll para a area de cliente
    scrollToAreaCliente  = () => {
        const areaClienteSection = document.getElementById('areaCliente');
        if (areaClienteSection) {
            areaClienteSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    //função que faz scroll para o fim da página/footer
    scrollToFoot = () => {
        const footer = document.getElementById('foot');
        if (footer) {
            footer.scrollIntoView({ behavior: 'smooth' });
        }
    };

    render() {
        return (
            <div id='sec' className='sec'>
                <nav className='navbar fixed-top navbar-dark bg-dark'>
                    <a className="navbar-brand logo" onClick={this.scrollToLoja}>ReparaTECH</a>
                    <div className='nav-links'>
                        <ul>
                            <li className="nav-item"><a className="nav-link" onClick={this.scrollToLoja}>Início</a></li>
                            <li className="nav-item"><a className="nav-link" onClick={this.scrollToFoot}>Fim</a></li>
                            <li className="nav-item"><a className="nav-link" onClick={this.scrollToAreaEspecializacao}>Especializações</a></li>
                            {this.props.logged ? (
                                <li className="nav-item"><a className="nav-link" onClick={this.scrollToAreaCliente}>Área do Cliente</a></li>
                            ) : (
                                <a></a>
                            )}
                            <li className="nav-item"><a className="nav-link" data-bs-toggle='offcanvas' data-bs-target='#sidebar' aria-controls='sidebar'>LogIn &#9776;</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;