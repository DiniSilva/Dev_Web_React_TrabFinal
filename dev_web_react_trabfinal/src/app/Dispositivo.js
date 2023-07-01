import React, { Component } from 'react';
import "./Dispositivo.css"

class Dispositivo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        let listaFinal = [];

        this.props.lista.forEach(item => 
            listaFinal.push(
            <li className="list-group-item">
                <div>Tipo: {item.tipo}</div>
                <div>Data de Registo: {item.dataReg}</div>
                <div>Modelo: {item.modelo}</div>
                <div>Estado: {item.estado}</div>
            </li>)
        );

        return (
            <> 
                <section class="dispositivo">
                    
                    <h4>Dispositivo</h4>
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

export default Dispositivo;