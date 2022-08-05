/* const React = require('react');
const Script = require('nordic/script');
const Head = require('nordic/head');
const restClient = require('nordic/restclient')({
    timeout: 5000,
    baseURL: '/api'
  });

function View(props){
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        restclient.get('/get-products')
            .then(res => setData(res.data))
    }, [])

    return (
        <>
        <Script src="vendor.js" />
        <Script src="products.js"/>

        <ul>
            {data.length > 0 ? 
            data.map((product) => <li>{product.name}</li>)
             : <li>No hay nada!</li>}
        </ul>
        </>
    )
}

module.exports =  View;  */

const React = require('react');
const Script = require('nordic/script');
const { useState, useEffect } = React;
const Head = require('nordic/head');
const restClient = require('nordic/restclient')({
    timeout: 5000,
    baseURL: '/api'
})
 
function View(props){
    const [data, setData] = useState([]);
    useEffect(()=>{
        restClient.get('/get-products')
            .then(res => setData(res.data))
            .catch(error => console.log(error))
    }, []);

    return (
        <div>
         <Script src="vendor.js" />
         <Script src="products.js" />
            <h1> Lista de productos </h1>
             <ul>
                {data.length > 0 ? data.map(product => <li>{product.title}</li>) : <h1>Error</h1>}
            </ul>
        </div>
    )
}

module.exports = View;