import { useEffect, useState } from 'react';
import nuevos from '../assets/images/nuevos.jpg'
// import { useParams } from 'react-router-dom';

function LastProduct() {
  const [totalProducts, setTotalProducts] = useState([]);

  useEffect(() => {
    // Espera a que la petición a la API de users se complete
    setTimeout(() => {
      // Realiza la petición a la API de products
      fetch('http://localhost:3031/api/products')
        .then(response => response.json())
        .then(data => {
          setTotalProducts(data);
        })
        .catch(error => console.log(error));
    }, 1000);
  }, [])
  if(totalProducts == ""){
    return(<p>Cargando..</p>)
  }else{
  return (
    <div className="col-lg-6 mb-4" style={{margin: 'auto'}}>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          {<h3>Producto con ID: {totalProducts.totalCount - 1}</h3>}
          <h5 className="m-0 font-weight-bold text-gray-800">
          </h5>
        </div>
        <div className="card-body">
          <div className="text-center">
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              style={{ width: "20rem" }}
              src={nuevos}
              alt="nuevo_producto"
            />
          </div>

          <p>
            Ultimo producto agregado:
          </p>
          <h2>{totalProducts.products[totalProducts.totalCount - 1].name}</h2>
          <a
            className="btn btn-danger"
            href="/products"
          >
            Mas Información
          </a>
        </div>
      </div>
    </div>
  );
}}

export default LastProduct;