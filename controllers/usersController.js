const pool = require("../db/pool")
const  bcrypt  = require("bcryptjs")

const createUser =  (req, res, next) => {
       bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
        try {
          await pool.query("INSERT INTO users (username, password) VALUES ($1, $2)", [
            req.body.username,
            hashedPassword,
          ]);
          console.log("User created succesfully!")
          res.redirect("/");
        } catch (error) {
          console.log(err)
          return next(err)
        }  
      }); 
  };

  

  module.exports = { createUser }