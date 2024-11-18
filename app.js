require("dotenv").config()
const express = require("express")
const app = express()


const appRouter = require("./routes/appRouter")
const productsRouter = require("./routes/productsRouter")
const categoriesRouter = require("./routes/categoriesRouter")

const path = require("node:path")
const assetsPath = path.join(__dirname, "public");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(assetsPath));

console.log(path.join(__dirname, "views"))
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", appRouter)
app.use("/products", productsRouter)
app.use("/categories", categoriesRouter)


const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})