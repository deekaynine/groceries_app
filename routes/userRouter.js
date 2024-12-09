const { Router } = require("express")
const passport = require("passport");
const usersController = require("../controllers/usersController")

const userRouter = Router()

userRouter.get("/sign-up", (req, res) => res.render("sign-up-form"));
userRouter.get("/log-in", (req, res)=>res.render("log-in-form"))
userRouter.post("/sign-up", usersController.createUser)
userRouter.post("/log-in", passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/"
    })
  );
userRouter.get("/log-out", (req, res, next) => {
    req.logout((err) => {
      if (err) {
        return next(err);
      }
      res.redirect("/");
    });
  }); 
  userRouter.post("/sign-up", )


module.exports = userRouter