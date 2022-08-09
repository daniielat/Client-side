const React = require('react');
const View = require('./view');
const Service = require('../../../services/productsService');

exports.fetchProducts = function fetchProducts(req, res, next){
    Service.getProducts(req.platform.siteId, 'samsung' , 10, 10)
        .then(response => {
            res.locals.productlist = response
            next()
        })
        .catch(error => next(error))
}

exports.render = function render(req, res){
    const ProductList = props => (
        <View{...props}/>
    )
    res.render(ProductList, {
        products: res.locals.productlist,
    })
}