import React, { Component } from 'react';
import '../assets/css/Users.css';
class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuarios: ""
        }
    }
    apiCall(url, consecuencia) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    usuarios: data
                })
            })
            .catch(err => console.log(err))
    }

    componentDidMount() {

        console.log('Se monta el componente')
        this.apiCall("http://localhost:3031/api/users/")
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
        console.log(this.state.products)
        let contenido;
        if (this.state.usuarios == "") {
            contenido = <p>Cargando.....</p>
        } else {
            contenido =

                <>
                    <div>
                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1>
                                Usuarios en la Database
                            </h1>
                        </div>
                        <div>
                            
                        </div>
                        <h2>Lista de Usuarios</h2>
                        Total de Usuarios: {this.state.usuarios.totalUsers}
                        <div className='container-products'>
                            {this.state.usuarios.users.map((user) => (
                                <div className="productos">
                                    <div key={user.id} className="producto">
                                        <p>ID: {user.id}</p>
                                        <p>Nombre: {user.fullName}</p>
                                        <p>Email: {user.email}</p>
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

export default Users;
