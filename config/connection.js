const mysql = require('mysql');
var connection

//Makes connection
if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  }else{
    connection = mysql.createConnection({
      port: 6999,
      host: "localhost",
      user: "root",
      password: "password",
      database: "burgers_db"
    })
  }
//Exports connection for ORM use
module.exports = connection