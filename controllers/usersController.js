const pool = require("../db/pool")
const  bcrypt  = require("bcryptjs")
const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler")

const validateUser = [
  body("username").trim()
  .notEmpty()
  .isLength({min: 10, max: 20}).withMessage(`Username must be 10-20 characters long`)
  .matches(/^[a-zA-Z0-9]+$/)
  .withMessage('Username must contain only letters and numbers')
  .custom(async value => {
    const user = await pool.query(`SELECT * FROM users WHERE username = '${value}'`)
    console.log('row_count' , user.rowCount)
    if(user.rowCount){
      throw new Error('Username already registered')
    }
  })
  ,
  body("password").trim()
  .notEmpty()
  .isLength({min:10, max: 20}).withMessage("Password must be between 10-20 characters")
  .matches(/^[a-zA-Z0-9]+$/)
  .withMessage('Username must contain only letters and numbers'),
  body("confirmPassword").trim()
  .notEmpty()
  .custom((value,{req})=> { return value === req.body.password}).withMessage("Passwords need to match")
];

const createUser = [validateUser, (req, res, next) => {
  const errors = validationResult(req)
  

  if(!errors.isEmpty()){
    console.log(errors)
    return res.status(400).render("sign-up-form")
  }

  bcrypt.hash(req.body.password, 10, (async (err, hashedPassword) => {
    try {
      await pool.query("INSERT INTO users (username, password) VALUES ($1, $2)", [
        req.body.username,
        hashedPassword,
      ]);
      console.log("User created succesfully!")
      res.redirect("/");
    } catch (error) {
      console.log(error)
      return next(err)
    }  
  })); 
}
]  

  

  module.exports = { createUser }