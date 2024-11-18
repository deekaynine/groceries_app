const db = require('../db/queries')

 const getHome = async (req, res) => {
    const products = await db.getAllProducts()
    res.render("index", {title: "Homepage", products: products })
} 

module.exports = { getHome }

