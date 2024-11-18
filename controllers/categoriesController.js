const db = require("../db/queries")

const getCategoriesList = async (req, res) => {
    const data = await db.queryCategories();
    res.send(data)
}

const getCategoryProducts = async (req, res) => {
    const {categoryName} = req.params
    const data = await db.queryCategoryProducts(categoryName)
    res.render('categoryProducts', {title: categoryName, products: data })
}

const getCategoryProduct = async(req, res) => {
    const {categoryName, productId} = req.params
    const data = await db.queryCategoryProduct(categoryName, productId)
    res.render("categoryProduct", {title: data[0].name, product: data[0] })
}



module.exports = { getCategoriesList, getCategoryProducts, getCategoryProduct }