import React, { Component } from 'react';
import "./AreaEspecializacao.css"

class AreaEspecializacao extends Component {
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
                <div className='cliente'>
                    <h1>Reparações</h1>
                    <p>Ipsum ullamco mollit amet ullamco velit minim commodo.</p>
            
                    <div className='cliente-row'>
                        <div className='cliente-colok'>
                            <h3>Telemoveis</h3>
                            <p>Fugiat ex esse cillum ea Lorem voluptate duis consequat elit. Proident veniam laboris et elit laborum duis do esse. Esse aliquip sint nulla cillum officia mollit officia sint labore voluptate ea aliqua. Eiusmod id ad in in occaecat id sint est pariatur excepteur.</p>
                        </div>
                        <div className='cliente-colkk'>
                            <h3>PC's</h3>
                            <p>Sint ex enim mollit nostrud Lorem incididunt minim fugiat qui exercitation anim. Voluptate ad Lorem non anim culpa mollit nulla incididunt pariatur enim. Occaecat amet aute laboris veniam pariatur enim labore. Adipisicing ad veniam ex velit esse labore in ea dolore laborum. Labore ea et elit excepteur magna.</p>
                        </div>
                        <div className='cliente-col'>
                            <h3>Eletrodomésticos</h3>
                            <p>Anim ullamco occaecat consectetur adipisicing excepteur pariatur labore mollit Lorem. Deserunt elit amet velit incididunt non dolore et magna labore ad. Minim nulla consequat eu minim. Sit sunt excepteur dolor laboris laborum. Aliquip nisi velit tempor veniam et eu veniam reprehenderit sit fugiat adipisicing occaecat veniam.</p>
                        </div>
                    </div>
                </div>

                <div className='listaF'>
                    <h4>AreaEspecializacao</h4>
                    <div>
                        <ul>
                            {listaFinal}
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}

export default AreaEspecializacao;