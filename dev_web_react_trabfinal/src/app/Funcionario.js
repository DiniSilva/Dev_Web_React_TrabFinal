import React, { Component } from 'react';
import "./Funcionario.css"

class Funcionario extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        let listaFinal = [];

        this.props.lista.forEach(item => 
            listaFinal.push(
            <li className="list-group-item">
                <div>Nome: {item.nome}</div>
                <div>Especialização: {item.especializacao}</div>
            </li>)
        );

        return (
            <> 
                <section class="funcionario">
                    
                    <h4>Funcionario</h4>
                    <div>
                        <ul class="list-group">
                            {listaFinal}
                        </ul>
                    </div>

                    <div class="col-6">
                    </div>
                   
                    <a href='#/' className='hero-btn' >Loja</a>
                    <a href='#/' className='hero-btn' >Area Cliente</a>
                </section>
            </>
        );
    }
}

export default Funcionario;