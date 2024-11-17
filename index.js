const express = require("express")
const appRouter = require("./routes/appRouter")
const groceriesRouter = require("./routes/groceriesRouter")

require("dotenv").config()

const app = express()

const path = require("node:path")
const assetsPath = path.join(__dirname, "public");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", usersRouter)
app.use("/groceries", groceriesRouter)


const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})