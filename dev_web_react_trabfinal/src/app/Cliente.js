import React, { Component } from 'react';

class Cliente extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <section className='cliente'>
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
                    <a href='#/' className='hero-btn' onClick={() => this.props.trocaLoja()}>Loja</a>
                    <a href='#/' className='hero-btn' onClick={() => this.props.trocaReparacao()}>Reparações</a>
                </section>
            </>
        );
    }
}

export default Cliente;
