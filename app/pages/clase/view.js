const React = require('react');
const Script = require('nordic/script');
const serialize = require('serialize-javascript');


function View(props) {
    const { message } = props; // Para el server side rendering
    const [count, setCount] = React.useState(0)
    const preloadedState = { //En esta variable vamos a guardar nuestras props
        message
    } // Para el client side rendering
    
    const handleAdd = () => {
        console.log('Sume')
        setCount(count => count + 1);
    }

    const handleSubstract = () => {
        console.log('Reste')
        setCount(count => count - 1);
    }
    return (
        <>
        {/* Le lleva al cliente las props */}
        {/* Serialize parsea (transforma) las props */}
        <Script>
            {`
            window.__PRELOADED_STATE__ = ${serialize(preloadedState, {isJSON: true})}
            console.log('%cClase page is loaded!', 'color:green')
            `}
        </Script>
        {/* Las dependencias cargadas en el cliente - dependencias son node module como por ejemplo React */}
        <Script src="vendor.js"/>
        {/* Carga el archivo de client de la page  y lo ejecuta */}
        <Script src="clase.js"/>
        <h2>{message}</h2>
        <button onClick={handleSubstract}>-</button>
        <span>{count}</span>
        <button onClick={handleAdd}>+</button>
        </>
    )
}

module.exports = View;

