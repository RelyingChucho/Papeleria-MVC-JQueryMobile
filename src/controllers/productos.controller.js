const productosController = {};
const Producto = require('../models/Producto.model');

productosController.obtenerProductos = async (req, res) => {
    //Ver todos los Productos
    const productos = await Producto.find()
    res.render('../src/views/obtenerproductos.ejs', { productos })
};

productosController.insertarProductos = async (req, res) => {
    //Insertar nuevos Productos
    const productoInsertado = new Producto(req.body);
    await productoInsertado.save();
    res.redirect("/verProductos");
};

module.exports = productosController;