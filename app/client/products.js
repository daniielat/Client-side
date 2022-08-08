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
const ImageProvider = require('nordic/image/provider');
const I18n = require('nordic/i18n');
const I18nProvider = require('nordic/i18n/I18nProvider');

const {
    imagePrefix,
    translations
} = window.__PRELOADED_STATE__;

const i18n = new I18n({translations}) // Nueva instancia de i18n

// Ejecutar la función hydrate
hydrate( // Configurar el proveedor de imágenes y envolver la vista
<I18nProvider i18n={i18n}>
    <ImageProvider prefix={imagePrefix}> 
        <ViewProducts/>
    </ImageProvider>
</I18nProvider>,
    document.getElementById('root-app') // Segundo parámetro root-app
)