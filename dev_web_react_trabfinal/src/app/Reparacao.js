import React, { Component } from 'react';

class Reparacao extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let listaFinal = [];

        this.props.lista.forEach(prev => 
            listaFinal.push(
            <li className="list-group-item">
                <div>Nome: {prev.nome}</div>
                <div>NIF: {prev.nif}</div>
                <div>E-mail: {prev.email}</div>
                <div>Telemovél: {prev.telemovel}</div>
            </li>)
        );

        return (
            <> 
                <section class="reparacao">
                    
                    <h4>Clientes</h4>
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

export default Reparacao;