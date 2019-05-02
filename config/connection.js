var mysql = require("mysql");
var connection;
// local connection
if (process.env.JAWSDB_URL) {
connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
var connection = mysql.createConnection({
  host: "tkck4yllxdrw0bhi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "w2n66ou3sukdozh7",
  password: "ujqwodfe0ajf6ozk",
  database: "cn2ffox5sg9z9ty5"
});
};
// mysql connection
// var connection = mysql.createConnection({
//   host: "us-cdbr-iron-east-02.cleardb.net",
//   port: 3306,
//   user: "b4e3fdc16c6b0d",
//   password: " b10c858b",
//   database: "heroku_b7cac4a70ac55fe"
// });


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
