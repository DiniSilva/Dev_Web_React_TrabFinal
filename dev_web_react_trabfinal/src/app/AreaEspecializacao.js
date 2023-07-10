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

        let listaTeste = valoresUnicos.map(item => (
            <div className='especializacao-col' key={item}>
                <h3>{item}</h3>
            </div>
        ));
        
        // this.props.listaFuncionarios.forEach(item => 
        //     listaFinal.push(
        //     <li className="list-group-item">
        //         <div>Especialização: {item.especializacao}</div>
        //     </li>)
        // );

        return (
            <>  
                <div className="areaEsp">
                    <h1>Reparações</h1>
                    <p>Ipsum ullamco mollit amet ullamco velit minim commodo.</p>
                
                    <div id="demo" className="carousel slide carousel-fade" data-bs-ride="carousel">

                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                        </div>

                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                                <img src="https://img.freepik.com/free-photo/serviceman-uses-magnifier-screwdriver-repair-damaged-smartphone-electronic-workshop_613910-20797.jpg?w=1380&t=st=1688900751~exp=1688901351~hmac=8cbb8fcc3556e72fe8e20e1f1a6bc7a4fc87f9578e16dc08214f72771384d5dd" alt="Los Angeles" className="d-block rounded-5" style={{width:"100%"}}/>
                                <div className="carousel-caption">
                                    <h3>Telemoveis</h3>
                                    <p><b>Seja ecrã partido, impedimento de fazer chamadas ou baterias inchadas, não se preocupe, nós arranjamos!</b></p>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="10000">
                                <img src="https://img.freepik.com/free-photo/checking-current-laptop-circuit-board_1098-13759.jpg?w=1380&t=st=1688900679~exp=1688901279~hmac=56cb2b1e654fca70848f717c60ac6ad8a17e1ec8664820ccad37eb782e2a9522" alt="Chicago" className="d-block rounded-5" style={{width:"100%"}}/>
                                <div className="carousel-caption">
                                    <h3>Computadores</h3>
                                    <p><b>Se precisar de ajuda para instalar qualquer aplicação, ou o seu computador estiver lento ou mudar ecrãs ou teclados partidos, não se preocupe, nós arranjamos!</b></p>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="10000">
                                <img src="https://img.freepik.com/free-photo/service-maintenance-worker-repairing_23-2149176697.jpg?w=1380&t=st=1688900922~exp=1688901522~hmac=156b8184cc2ccf418d5839a872ac5d086bb879955d3a4a7c7510515031f10fe6" alt="New York" className="d-block rounded-5" style={{width:"100%"}}/>
                                <div className="carousel-caption">
                                    <h3>Eletrodomésticos</h3>
                                    <p><b>Desde micro-ondas, relógios digitais, ventoinhas ou torradeiras, se qualquer um dos seus eletrodomésticos não estiver a funcionar, não se preocupe, nós arranjamos!</b></p>
                                </div>
                            </div>
                        </div>
                        
                        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </button>
                    </div>
                </div>

                <div className='especializacao'>
                    <h4>As Nossas Currentes Especializações:</h4>
                    <div className='especializacao-row'>
                        {listaTeste}
                        <div className='especializacao-col'>
                            <h3>Android</h3>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default AreaEspecializacao;