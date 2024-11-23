const { Router } = require("express")
const passport = require("passport");
const usersController = require("../controllers/usersController")

const userRouter = Router()

userRouter.get("/sign-up", (req, res) => res.render("sign-up-form"));
userRouter.post("/sign-up", usersController.createUser)
userRouter.post("/log-in", passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/"
    })
  );

module.exports = userRouter