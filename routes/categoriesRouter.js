const { Router } = require("express")
const categoriesController = require("../controllers/categoriesController")

const categoriesRouter = Router()

categoriesRouter.get('/', categoriesController.getCategoriesList)
categoriesRouter.get('/:categoryName/products', categoriesController.getCategoryProducts)
categoriesRouter.get('/:categoryName', categoriesController.getCategoryProducts)
categoriesRouter.get('/:categoryName/products/:productId', categoriesController.getCategoryProduct)


module.exports = categoriesRouter