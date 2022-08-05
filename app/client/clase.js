const React = require('react');
const ClaseView = require('../pages/clase/view');
const hydrate = require('nordic/hydrate');

const { message } = window.__PRELOADED_STATE__; // Desestructuramos la prop y se la pasamos al componente


hydrate(
    <ClaseView
        message = {message}
    />, 
    document.getElementById('root-app')
);

// Esta función va a adjuntar el resultado del componente ClaseView al root

{/* <main id="root-app">
    <ClaseView>
         código de ClaseView 
    </ClaseView>

</main> */}