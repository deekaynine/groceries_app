const pool = require("./pool")

async function getAllProducts(){
    const { rows } = await pool.query("SELECT * FROM product");
    return rows    
}

async function getSingleProduct(productId){
    const data = await pool.query(`SELECT * FROM product WHERE id = ${productId};`)
    return data
}


async function queryCategories(){
    const {rows} =  await pool.query(`SELECT * FROM category`)
    return rows
}

async function queryCategoryProducts(name){
    const {rows} = await pool.query(`SELECT * FROM category INNER JOIN product 
        ON category.id = product.category_id
        WHERE LOWER(category.name) LIKE LOWER('${name}') `)
    return rows
}

async function queryCategoryProduct(categoryName, productId){
    const {rows} = await pool.query(`SELECT DISTINCT * FROM category INNER JOIN product 
        ON category.id = product.category_id
        WHERE LOWER(category.name) = LOWER('${categoryName}') AND product.id = ('${productId}') `)
    return rows
}

async function addProduct(name, price, stock, category_id){
    await pool.query(`INSERT INTO product (name, price, stock, category_id) 
                        VALUES ($1, $2, $3, $4)`
                        , [name, price, stock, category_id])
    console.log("update")
}

async function deleteProduct(productId){
    await pool.query(`DELETE FROM product WHERE product.id = ${productId};`)
    console.log("update")
    }

async function updateProduct( name, price, stock, category_id, productId){
    await pool.query(`
        UPDATE product
        SET
        name = '${name}',
        price = ${price},
        stock = ${stock},
        category_id =${category_id}
        WHERE product.id = ${productId};`)
    console.log("update")
}


module.exports = { getAllProducts, queryCategories, 
    queryCategoryProduct,queryCategoryProducts,
    addProduct, deleteProduct, updateProduct, getSingleProduct
}