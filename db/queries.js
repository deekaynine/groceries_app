const pool = require("./pool")

async function getAllProducts(){
    const { rows } = await pool.query("SELECT * FROM product");
    return rows    
}

async function getSingleProduct(productId){
    const data = await pool.query(`SELECT * FROM product WHERE id = ${productId}`)
    return data
}


async function queryCategories(){
    const {rows} =  await pool.query(`SELECT * FROM category`)
    return rows
}

async function queryCategoryProducts(name){
    const {rows} = await pool.query(`SELECT * FROM category INNER JOIN product 
        ON category.id = product.category_id
        WHERE category.name ='${name}' `)
    return rows
}

async function queryCategoryProduct(categoryName, productId){
    const {rows} = await pool.query(`SELECT * FROM category INNER JOIN product 
        ON category.id = product.category_id
        WHERE category.name ='${categoryName}' AND product.id = ('${productId}') `)
    return rows
}

module.exports = { getAllProducts, getSingleProduct, queryCategories,queryCategoryProduct,queryCategoryProducts }