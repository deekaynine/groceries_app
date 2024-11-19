const db = require('../db/queries')

 const getHome = async (req, res) => {
    const products = await db.getAllProducts()
    const categories = await db.queryCategories();
    res.render("index", {title: "Homepage", products: products, categories: categories })
} 

module.exports = { getHome }

