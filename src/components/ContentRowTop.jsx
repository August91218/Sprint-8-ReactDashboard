import DataContent from './DataContent';
import { useEffect, useState } from 'react';

function ContentRowTop(){
    const [totalProducts, setTotalProducts] = useState([]);
    const [totalUsers, setTotalUsers] = useState([]);

    useEffect(() => {
      // Realiza la petición a la API de users
      fetch('http://localhost:3031/api/users')
        .then(response => response.json())
        .then(data => {
          setTotalUsers(data);
        })
        .catch(error => console.log(error));

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
    }, []);

    const dataBoxes = [
      {
        title: "Usuarios Registrados:",
        amount: totalUsers.totalUsers = "" ? "Cargando..": totalUsers.totalUsers,
        icon: 'fa-user',
        styles: ['border-left-primary' ,'text-primary']
      },
      {
        title: "Productos Registrados",
        amount: totalProducts.totalCount,
        icon: "fa-clock",
        styles: [ 'border-left-success' ,'text-success']
      },
      {
        title: "",
        amount: 0,
        icon: 'fa-user',
        styles: ['border-left-warning', 'text-warning']
      }
    ]


    return(
        <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
        </div>
        {/* Content Row Movies*/}
        <div className="row">
          {/* Movies in Data Base */}
          {
            dataBoxes.map((dataBox, i) =>(
              <DataContent key={i} dataBox = {dataBox}/>
            ))
          }
        </div>
        {/* End movies in Data Base */}
        {/* Content Row Last Movie in Data Base */}

      </div>
    )
}

export default ContentRowTop;