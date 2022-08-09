const React = require('react');
const View = require('../pages/productList/view');
const hydrate = require('nordic/hydrate');

const {
  products,
  offset
} = window.__PRELOADED_STATE__;

hydrate(
    <View products={products}/>
  ,
  document.getElementById('root-app'));