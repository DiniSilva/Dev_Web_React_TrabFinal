import React, { Component } from 'react';
import "./Dispositivo.css"


class Dispositivo extends Component {
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

        //
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

        //
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

        return (
            <> 
                {this.props.logged ? (
                <div class="row">
                
                    <div class="col">
                        <h4>Dispositivo</h4>
                        <div>
                            <ul class="listaEstilo2">
                                {listaDis}
                            </ul>
                        </div>
                    </div>
                    <div class="col">
                        <h4>Reparacao</h4>
                        <div>
                            <ul class="listaEstilo2">
                                {listaRep}
                            </ul>
                        </div>
                    </div>  
                </div>
                ):(
                    <button onClick={() => this.teste()}>TESTE</button>
                )}
                
            </>
        );
    }
}

export default Dispositivo;