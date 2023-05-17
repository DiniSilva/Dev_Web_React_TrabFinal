import React, { Component } from 'react';

class Cliente extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h4>CLIENTE</h4>
                <button onClick={() => this.props.trocaFunc()}>VOLTAR</button>
            </div>
        );
    }
}

export default Cliente;
