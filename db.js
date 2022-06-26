var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'nodeapp'
});

  
const connectoMysql =()=>{
   connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

}

module.exports=connectoMysql