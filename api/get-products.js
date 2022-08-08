/* const router = require('nordic/ragnar').router();
const Service = require('../services/productsService');


router.get('/', (req, res) => {
    const { name, limit } = req.query; // Propiedad propia de express
    const { siteId} = req.platform; // platform es una propiedad que se le agrega a la propiedad req gracias a ragnar

    Service.getProducts(siteId,name, limit)
        .then(response => res.json(response))
        .catch(error => console.log(error))
})

module.exports = router; */
/**
 * Ejercitación 1
 * 
 * Aquí deberás crear el endpoint con el método GET, el cual consuma
 * el servicio que devuelve los productos de la API de MeLi.
 * 
 * Comando para correr el test: `npm run test:unit:watch get-products`
 */

const router = require('nordic/ragnar').router();
const Service = require('../services/productsService');

router.get('/', (req, res) => {
    const { offset, name, limit } = req.query;
    const { siteId } = req.platform;

    Service.getProducts(siteId, "tablet", 10, 5)
        .then(response => res.json(response))
        .catch(error => res.json(error))
})

module.exports = router;
