const { Router } = require("express")
const productController = require("../controllers/productsController")

const productsRouter = Router()

productsRouter.get('/', productController.getAllProducts)
productsRouter.get('/create', productController.getCreateProduct)

productsRouter.post('/create', productController.createProduct)
productsRouter.get('/:productId', productController.getSingleProduct)
productsRouter.get('/:productId/update', productController.getUpdateProduct)
productsRouter.post('/:productId/delete', productController.deleteProduct)
productsRouter.post('/:productId/update', productController.updateProduct)


module.exports = productsRouter