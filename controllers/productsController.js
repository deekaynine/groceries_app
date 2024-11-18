const db = require("../db/queries")

const getSingleProduct = async (req, res) => {
    const { productId } = req.params
    const { rows } = await db.getSingleProduct(productId)
    console.log(rows)
    res.render('Product', {title: rows[0].name, product: rows[0]})
}



module.exports = { getSingleProduct }