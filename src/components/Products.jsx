import React, { Component } from 'react';
import '../assets/css/Users.css';
class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: ""
        }
    }
    apiCall(url, consecuencia) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    products: data
                })
            })
            .catch(err => console.log(err))
    }

    componentDidMount() {

        console.log('Se monta el componente')
        this.apiCall("http://localhost:3031/api/products/")
    }

    componentDidUpdate() {
        console.log('Se actualiza el componente')

    }

    /* getProducts(url){
        fetch(url)
        .then((resp) => resp.json())
        .then(({ data }) => {
            this.setState({
                products: data
            })
            console.log(data)
        })
        .catch(err => console.log(err))
    }
 */
    render() {
        console.log(this.state.products.products)
        let contenido;
        if (this.state.products == "") {
            contenido = <p>Cargando.....</p>
        } else {
            contenido =

                <>
                    <div>
                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1>
                                Productos en la Database
                            </h1>
                        </div>
                        <div>

                        </div>
                        <h2>Lista de Productos</h2>
                        Total de Productos: {this.state.products.totalCount}
                        <div className='container-products'>
                            {this.state.products.products.map((producto) => (
                                <div className="productos">
                                    <div key={producto.id} className="producto">
                                        <p>ID: {producto.id}</p>
                                        <p>Nombre: {producto.name}</p>
                                        <br />
                                            <br />
                                            Descripcion:<p className='description'> {producto.description}</p>
                                            <p>Precio: ${producto.price}</p>
                                            <br />
                                            <p>Descuento: {producto.discount}%</p>

                                    </div>
                                </div>
                            ))
                            }
                        </div>


                        {/* Agrega más campos según la estructura del objeto */}
                    </div>
                </>

        }
        return (
            <>
                {contenido}
            </>
        );
    }
}

export default Products;
