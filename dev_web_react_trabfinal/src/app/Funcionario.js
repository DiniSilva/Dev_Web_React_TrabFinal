import React, { Component } from 'react';
import "./Funcionario.css"

class Funcionario extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // obter os valores unicos da listaFuncionarios
        let valoresUnicos = [...new Set(this.props.listaFuncionarios.map(item => item.especializacao))];

        // mete os valores obtidos antes noutra lista
        let listaFinal = valoresUnicos.map(item => (
            <li className="list-group-item" key={item}>
                <div>Especialização: {item}</div>
            </li>
        ));
        
        // this.props.listaFuncionarios.forEach(item => 
        //     listaFinal.push(
        //     <li className="list-group-item">
        //         <div>Especialização: {item.especializacao}</div>
        //     </li>)
        // );

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