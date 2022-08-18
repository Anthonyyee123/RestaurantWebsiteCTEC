var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "restaurantreview.co2gjev2m2ln.us-east-1.rds.amazonaws.com",
  port: "3306",
  user: "admin",
  password: "tG077032",
  database: "comfieats",
});

connection.connect((err) => {
  // test out connection and console.log error if there is one

  if (err) throw err;

  console.log("Connected To DB");
});

module.exports = connection;
