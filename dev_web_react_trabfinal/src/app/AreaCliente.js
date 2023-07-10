import React, { Component } from 'react';
import "./AreaCliente.css"


class AreaCliente extends Component {
    constructor(props) {
        super(props);
    }

    teste(){
        console.log(this.props.logged, this.props.logid);
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
                // mete na listaDis
                listaDis.push(
                    <li className="list-group-item">
                        <div>Tipo: {item.tipo}</div>
                        <div>Data de Registo: {item.dataReg}</div>
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
                // mete na listaRep
                listaRep.push(
                    <li className='list-group-item'>
                        <div>Data Inicial: {item.dataInicio}</div>
                        <div>Data Fim: {item.dataFim}</div>
                        <div>Custo: {item.custo}</div>
                        <div>Observação: {item.observacao}</div>
                    </li>
                )
            }
        })

        if(true) {
            return (
                <> 
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Dispositivos</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Reparações</button>
                        </li>
                        
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                            <ul className="listaCliente">
                                    {listaDis}
                            </ul>
                        </div>
                        <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
                            <ul className="listaCliente">
                                    {listaRep}
                            </ul>
                        </div>
                    </div>
                </>
            );
        } 
    }
}

export default AreaCliente;