const { Router } = require("express")
const productController = require("../controllers/productsController")

const productsRouter = Router()

productsRouter.get('/:productId', productController.getSingleProduct)


module.exports = productsRouter