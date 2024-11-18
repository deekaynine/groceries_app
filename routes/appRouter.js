const { Router } = require("express")
const appController = require("../controllers/appControllers")


const appRouter = Router()

appRouter.get('/', appController.getHome)

module.exports = appRouter