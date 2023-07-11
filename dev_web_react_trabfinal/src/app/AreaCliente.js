import React, { Component } from 'react';
import "./AreaCliente.css"


class AreaCliente extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        // lista para guardar a ClieneFK dos dispostitovos
        let listaID = [];
        // lista dos Dispositvos do Cliente
        let listaDis = [];
        // lista de Reaparações do Dispositivos dos Clientes
        let listaRep = [];

        // vai buscar as ClientesFK's da listaDispostivos
        this.props.listaDispositivos.forEach(item => {
            // check para ver se as clienteFK's são iguais ao ID do Cliente
            if(item.clienteFK === this.props.logid){
                // mete na listaID
                listaID.push(item.id)
            }
        });

        // faz a lista de Dispostivos
        this.props.listaDispositivos.forEach(item => {
            // check para ver se as clienteFK's são iguais ao ID do Cliente
            if (item.clienteFK === this.props.logid){
                // guardar a data Registo recebida
                const dataReg = new Date(item.dataReg).toLocaleString("pt-PT", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                });
                // guardar a hora Registo recebida
                const horaReg = new Date(item.dataReg).toLocaleString("pt-PT", {
                    hour: "2-digit",
                    minute: "2-digit",
                });
                // mete na listaDis
                listaDis.push(
                    <li className="list-group-item">
                        <div>Tipo: {item.tipo}</div>
                        <div>Data de Registo: {dataReg} - {horaReg}</div>
                        <div>Modelo: {item.modelo}</div>
                        <div>Estado: {item.estado}</div>
                    </li>
                )
            }
        })

        // faz a lista de Reparações
        this.props.listaReparacaos.forEach(item => {
            // check para ver se dispositivoFK é igual aos ID's obtidos antes
            if (listaID.includes(item.dispositivoFK)){
                // guardar a data Inicio recebida
                const dataInicio = new Date(item.dataInicio).toLocaleString("pt-PT", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                });
                // guardar a hora Inicio recebida
                const horaInicio = new Date(item.dataInicio).toLocaleString("pt-PT", {
                    hour: "2-digit",
                    minute: "2-digit",
                });
                // mete vazias a data e hora Fim
                let dataFim = "";
                let horaFim = "";

                // check para para ver se dataFim é null
                if( item.dataFim !== null){
                    // guardar a data Fim recebida
                    dataFim = new Date(item.dataFim).toLocaleString("pt-PT", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                    });
                    // guardar a hora Fim recebida
                    horaFim = new Date(item.dataFim).toLocaleString("pt-PT", {
                        hour: "2-digit",
                        minute: "2-digit",
                    });
                } 
                // mete na listaRep
                listaRep.push(
                    <li className='list-group-item'>
                        <div>Data Inicial: {dataInicio} - {horaInicio}</div>
                        <div>Data Fim: {dataFim} - {horaFim}</div>
                        <div>Custo: {item.custo}€</div>
                        <div>Observação: {item.observacao}</div>
                    </li>
                )
            }
        })
        
        //condição verdadeira se o utilizador estiver logado
        if(this.props.logged) {
            return (
                <> 
                    {/*tabs da area de cliente*/}
                    <div className='fonte_area'><h1>Área Cliente</h1></div>
                    <div >
                        <ul className="nav nav-tabs " id="myTab" role="tablist">
                            <li className="nav-item text-white" role="presentation"  style={{width:'50%'}}>
                                <button className="nav-link active botao" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true" style={{color:"gray"}}>Dispositivos</button>
                            </li>
                            <li className="nav-item" role="presentation"  style={{width:'50%'}}>
                                <button className="botao nav-link " id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false" style={{color:"gray"}}>Reparações</button>
                            </li>
                            
                        </ul>
                    
                        <div className="tab-content caixa" id="myTabContent">
                            <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                                <ul className="listaCliente">
                                    {/*lista de dispositivos*/}
                                        {listaDis}
                                </ul>
                            </div>
                            <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
                                <ul className="listaCliente">
                                    {/*lista de reparações*/}
                                        {listaRep}
                                </ul>
                            </div>
                        </div>
                    </div>
                </>
            );
        } 
    }
}

export default AreaCliente;