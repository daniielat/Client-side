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
const Image = require('nordic/image');
const serialize = require('serialize-javascript');
const InjectI18n = require('nordic/i18n/injectI18n');
const restClient = require('nordic/restclient')({
    timeout: 5000,
    baseURL: '/api'
})
 
function View(props){
    const {imagePrefix, translations } = props;  // View recibe la prop para mandarsela al client
    const preloadedState = { imagePrefix, translations } // Se envía la prop al cliente
    const [data, setData] = useState([]);
    useEffect(()=>{
        restClient.get('/get-products')
            .then(res => setData(res.data))
            .catch(error => console.log(error))
    }, []);

    return (
        <div>
        <Script>
            {`
            window.__PRELOADED_STATE__ = ${serialize(preloadedState, {isJSON: true})}
            console.log('%cClase page is loaded!', 'color:green')
            `}
        </Script>
         <Script src="vendor.js" />
         <Script src="products.js" />
            <h1> Lista de productos </h1>
             <ul>
                {
                data.length > 0 ? 
                data.map(product => (
                <li key={product.id}>
                    <h5>{product.title}</h5>
                    <a href={product.permalink}>
                        <Image src={product.thumbnail} alt={product.title} lazyload="off"/>
                    </a>
                    <p>${product.price}</p>
                </li>
                )) 
                :
                 <h1>Error</h1>}
            </ul>
        </div>
    )
}

module.exports = InjectI18n(View) ;