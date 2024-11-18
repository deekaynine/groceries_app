const db = require("../db/queries")

const getCategoriesList = async (req, res) => {
    const data = await db.queryCategories();
    res.send(data)
}

const getCategoryProducts = async (req, res) => {
    const {categoryName} = req.params
    const data = await db.queryCategoryProducts(categoryName)
    res.send(data)
}

const getCategoryProduct = async(req, res) => {
    const {categoryName, productId} = req.params
    const data = await db.queryCategoryProduct(categoryName, productId)
    res.send(data)
}



module.exports = { getCategoriesList, getCategoryProducts, getCategoryProduct }