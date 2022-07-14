require('dotenv').config();
const mysql = require("mysql2");
// const fs = require("fs");
// const path = require("path");
// const seed = fs.readFileSync(path.join(__dirname, "seed.sql"));

const connection = mysql.createConnection({
  host: "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect(function (err) {
  console.log(process.env.DB_NAME);
  if (err) {
    throw err;
  }
  });

// connection.query(seed, err => {
//   console.log("Let the seedening begin");
//   if(err){
//     throw err
//   }
//   console.log("The seedening has ended");
// })

module.exports = connection;