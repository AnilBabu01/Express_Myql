var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodeapp",
});

const connectoMysql = () => {
  connection.connect(function (err) {
    if (err) throw err;
    console.log("Myqsl successfully connected ");
    var sql = "INSERT INTO customers (name, address) VALUES ('Company abc', 'Highway 88')";
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });
};

module.exports = connectoMysql;
