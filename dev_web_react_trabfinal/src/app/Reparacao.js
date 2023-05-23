import React, { Component } from 'react';

class Reparacao extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <> 
                <section class="reparacao">
                    <div class="row">
                        <div class="col-12">
                            <table class="table table-image">
                            <thead>
                                <tr>
                                <th scope="col">Reparacao - ID</th>
                                <th scope="col">Image</th>
                                <th scope="col">Article Name</th>
                                <th scope="col">Author</th>
                                <th scope="col">Words</th>
                                <th scope="col">Shares</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">1</th>
                                <td class="w-25">
                                    <img src="https://static3.bigstockphoto.com/7/5/3/large1500/357591968.jpg" class="img-fluid img-thumbnail" alt="Sheep"/>
                                </td>
                                <td>Broken PC</td>
                                <td>José</td>
                                <td>913</td>
                                <td>2.846</td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                <td class="w-25">
                                    <img src="https://h4a3g7z8.rocketcdn.me/wp-content/uploads/2022/09/my-phone-got-borken.jpg" class="img-fluid img-thumbnail" alt="Sheep"/>
                                </td>
                                <td>Broken Phone</td>
                                <td>Manuel</td>
                                <td>1.434</td>
                                <td>3.417</td>
                                </tr>
                            </tbody>
                            </table>   
                        </div>
                    </div>
                    <a href='#/' className='hero-btn' onClick={() => this.props.trocaLoja()}>Loja</a>
                    <a href='#/' className='hero-btn' onClick={() => this.props.trocaCliente()}>Area Cliente</a>
                </section>
            </>
        );
    }
}

export default Reparacao;