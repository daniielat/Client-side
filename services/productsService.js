/**
 * Implementar un servicio que tenga un método estático llamado `getProducts`,
 * el cual tiene recibe dos parámetros: siteId y el nombre nombre de un producto.
 * Restclient va a hacer una request a la ruta `/sites/${siteId}/search`.
 * 
 * Comando para correr el test: `npm run test:unit:watch products-service`
 */

/* const normalizer = require('./transforms/normalizer');
const restclient = require('nordic/restclient')({
  timeout: 5000,
  baseURL: 'https://api.mercadolibre.com'
});

class ProductsService { 
  static getProducts(siteId, q, limit){
    return restclient.get(`/sites/${siteId}/search?q=${q}&limit=${limit}`)
      .then(response => normalizer(response.data.results))
      .catch(error => ([]))
  }
}

module.exports = ProductsService;
 */

/* return restclient.get(`/sites/${siteId}/search`, {
  params: {
    q: name, 
    offset,
    limit
  }
}) */

// Requerir la librería restCliente y agregarle el timeout y baseURL en caso de no tener acceso a la API internak de Mercado Libre
const restClient = require('nordic/restclient')({
  timeout:5000,
  baseURL: 'https://api.mercadolibre.com'
});

// Crear la clase
class ProductsService {
  static getProducts(siteId, q, offset, limit){ // Crear el método estático que reciba los parámetros necesarios
    return restClient.get(`/sites/${siteId}/search`, {params: {
      q,
      offset,
      limit
    }}
    ) // Llamar el método get de restclient y agregarle la ruta
      .then(response => response.data.results) // Guardar el resultado que retorna el then en response.data.results, de acuerdo a la necesidad
      .catch(error => ([]))
  }
}

module.exports = ProductsService;
