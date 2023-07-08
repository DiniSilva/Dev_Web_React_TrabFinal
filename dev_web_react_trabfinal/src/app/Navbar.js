import React, { Component } from 'react';
import "./Navbar.css";

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    scrollToFuncionario = () => {
        const funcionarioSection = document.getElementById('funcionario');
        if (funcionarioSection) {
          funcionarioSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    render() {
        return (
            <div className='sec'>
                <nav className='navbar fixed-top navbar-dark'>
                    <a class="navbar-brand" href=''><img src='https://cdn.icon-icons.com/icons2/2620/PNG/512/among_us_player_red_icon_156942.png' class="d-inline-block "></img>ReparaTECH</a>
                    <div className='nav-links'>
                        <ul>
                            <li class="nav-item"><a class="nav-link" href=''> HOME</a></li>
                            <li class="nav-item"><a class="nav-link" onClick={this.scrollToFuncionario}>Funcionarios</a></li>
                            <li class="nav-item"><a class="nav-link" href=''>Course</a></li>
                            <li class="nav-item"><a class="nav-link" href=''>IDK</a></li>
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