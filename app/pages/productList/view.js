const React = require('react');
const Script = require('nordic/script');
const serialize = require('serialize-javascript');
const { useState, useEffect } = require('react');
const restClient = require('nordic/restclient')({
    timeout:5000,
    baseURL: '/api'
  });

function View(props){
    const {products, offset} = props;
    const preloadedState = {products, offset};
    const [offsetState, setOffset] = useState(0);
    const [productState, setProduct] = useState(products);

/*     const handleClick = () => {
        setOffset(offsetState => offsetState + 10);
    }; */


    const handleClick = () => {
        setOffset(offsetState => offsetState + 10)
        console.log('click')
      }

     useEffect(() => {
        if (offsetState >= 10 ){
            restClient.get('/get-products', {params: {
                name: 'samsung',
                limit:10, 
                offset: offsetState
            }})
                .then(response => setProduct(response.data))
                .catch(() => setProduct([]))
        }
    }, [offsetState])
 


    return (
        <>
      <Script>
            {`
          window.__PRELOADED_STATE__ = ${serialize(preloadedState, { isJSON: true })};
          console.log('Demo page is loaded!');
        `}
            </Script>
         <Script src="vendor.js" />
            <Script src="productList.js"/>
            <h1>Lista de productos</h1>
            <ul>
                {
                   productState.length > 0 ?
                   productState.map(product => (
                    <li key={product.id}>
                        <h3>
                        {product.title}
                        </h3>
                        <a href={product.permalink}>
                            <img src={product.thumbnail} alt={product.name} lazyload="off"/>
                        </a>
                    </li>
                   ))
                   :
                   <h3> No se encontraron productos</h3>
                }
            </ul>
            <button onClick={() => handleClick()}>More products</button>
        </>
    )
};

module.exports = View;