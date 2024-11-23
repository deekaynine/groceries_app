const pool = require("../db/pool")

const createUser = async (req, res, next) => {
    try {
      await pool.query("INSERT INTO users (username, password) VALUES ($1, $2)", [
        req.body.username,
        req.body.password,
      ]);
      res.redirect("/");
    } catch(err) {
      return next(err);
    }
  };

  

  module.exports = { createUser }