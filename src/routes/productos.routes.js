const {Router} = require('express');
const router = Router();
const productosController = require('../controllers/productos.controller');

router.get('/verProductos', productosController.obtenerProductos);

router.post('/insertarProducto', productosController.insertarProductos);

module.exports = router;