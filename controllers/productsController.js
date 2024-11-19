const db = require("../db/queries")

const getAllProducts = async(req, res)=>{
    const data = await db.getAllProducts()
    res.render('index', {title: "All Products", products : data})
}

const getSingleProduct = async (req, res) => {
    const { productId } = req.params
    const { rows } = await db.getSingleProduct(productId)
    res.render('Product', {title: rows[0].name, product: rows[0]})
}

const getCreateProduct = (req ,res) => {
    res.render('addProduct', {title: "Add Product",})
}

const getUpdateProduct = async (req, res) => {
    const { productId } = req.params
    const { rows } = await db.getSingleProduct(productId)
    res.render('updateProduct', {title: "Update Product", product: rows[0]})
}

const createProduct = async (req, res)=>{
    const { name, price, stock, category_id } = req.body;
    console.log(name , price, stock, category_id)
    await db.addProduct(name, price, stock, category_id) 
    console.log("added")
}

const deleteProduct = async (req, res)=>{
    const { productId } = req.params
    await db.deleteProduct(productId)
    res.send("Product deleted succesfully")
}

const updateProduct = async (req, res)=>{
    const { productId } = req.params
    const { name, price, stock, category_id } = req.body; 
    console.log(req.body) 
    await db.updateProduct(name, price, stock, category_id , productId)
    console.log("updated")
}



module.exports = { getSingleProduct, getAllProducts, 
                    getCreateProduct, getUpdateProduct,
                    createProduct, deleteProduct, updateProduct }