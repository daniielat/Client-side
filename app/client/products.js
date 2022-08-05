/* const React = require('react');
const ProductsView = require('../pages/products/view');
const hydrate = require('nordic/hydrate');

hydrate(
    <ProductsView/>, 
    document.getElementById('root-app')
); */


const React = require('react'); // Requerir React
const ViewProducts = require('../pages/products/view'); // Requerir la vista
const hydrate = require('nordic/hydrate'); // Requerir la función hydrate

// Ejecutar la función hydrate
hydrate(
    <ViewProducts/>, // Primer parámetro, el componente de la vista que recibe las props si las hay
    document.getElementById('root-app') // Segundo parámetro root-app
)