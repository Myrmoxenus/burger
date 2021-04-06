// Set up MySQL connection.
const mysql = require('mysql');

/*
if (process.env.JAWSDB_URL){
const connection = mysql.createConnection(provess.env.JAWSDB_URL)
}
else{
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  // NOTE: Be sure to add your MySQL password here!
  password: 'password',
  database: 'burgers_db',
})}
*/

//Connection is made through connection string in Heroku environment
const connection = mysql.createConnection(provess.env.JAWSDB_URL)


// Make connection.
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

// Export connection for our ORM to use.
module.exports = connection;
