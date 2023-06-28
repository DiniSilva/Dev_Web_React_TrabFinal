import logo from '../logo.svg';
import "./Loja.css"

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

    openNav() {
        document.getElementById("mySidebar").style.width = "500px";
    }

    closeNav() {
        document.getElementById("mySidebar").style.width = "0px";
    }
    
    render() {
        return (
            <>
                <div className='sec'>
                    <nav className='navbar fixed-top navbar-dark'>
                        <a class="navbar-brand" href=''><img src='https://cdn.icon-icons.com/icons2/2620/PNG/512/among_us_player_red_icon_156942.png' class="d-inline-block"></img>Amogus</a>
                        <div className='nav-links'>
                            <ul>
                                <li class="nav-item"><a class="nav-link" onClick={() => this.openNav()}>&#9776; HOME</a></li>
                                <li class="nav-item"><a class="nav-link" href=''>About</a></li>
                                <li class="nav-item"><a class="nav-link" href=''>Course</a></li>
                                <li class="nav-item"><a class="nav-link" href=''>IDK</a></li>
                                <li class="nav-item"><a class="nav-link" href=''>HOE</a></li>
                            </ul>
                        </div>
                        <div className='blur'></div> 
                    </nav>
                </div>

                <div id="mySidebar" class="sidebar">
                    <a href="javascript:void(0)" class="closebtn" onClick={() => this.closeNav()}>&times;</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Clients</a>
                    <a href="#">Contact</a>
                </div>

                <section className='loja'>
                    <h1>Ullamco incididunt dolore pariatur adipisicing.</h1>
                    <p>Velit sint pariatur tempor non et enim. Sint minim sunt sit ea qui duis deserunt. Eiusmod veniam aute labore eu incididunt dolor commodo elit incididunt reprehenderit cillum adipisicing incididunt. Eu labore eu consectetur duis irure elit quis pariatur ad elit. <br/>Deserunt voluptate officia qui excepteur qui Lorem occaecat exercitation sint eu id. Culpa aliqua eu deserunt cillum et anim occaecat officia cupidatat.</p>
                    <a href='#' className='hero-btn' onClick={() => this.openNav()}>&#9776; Open Sidebar</a>
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