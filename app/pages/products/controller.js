/* const React = require('react');
const View = require('./view');

exports.render = function render(req, res) {
    const Products = props => <View{...props}/>

    res.render(Products);
} */

const React = require('react');
const View = require('./view');
const ImageProvider = require('nordic/image/provider');
const config = require('nordic/config');
const I18nProvider = require('nordic/i18n/I18nProvider'); // Proveedor I18n


const imagePrefix = config.assets.prefix; //Lo guardo en una variable porque lo voy a utilizar más de una vez
exports.render = function render(req,res){
    const Products = props => (
        <I18nProvider i18n={req.i18n}>
        <ImageProvider prefix={imagePrefix}>
            <View{...props}/>
        </ImageProvider>
        </I18nProvider>
    )

    res.render(Products),{
        translations: req.translations,
        imagePrefix
    }
}