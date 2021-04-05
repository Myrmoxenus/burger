const connection = require('./connection');


const orm = {
        selectAll(callback) {
            let query = 'SELECT * FROM burgers'
            connection.query(query, (err, res) => {
                if (err) {
                    throw err
                }
                callback(res)
            })
        },
        insertOne(burgerName) {
            let query = 'INSERT INTO burgers (burger_name) VALUES (' + burgerName + ')'
            connection.query(query, (err, res) => {
                if (err){
                    throw err
                }
            })
        },
        updateOne(burgerID) {
            let query = 'UPDATE burgers SET devoured = 1 WHERE id = ' + burgerID
            connection.query(query, (err, res) => {
                if (err) {
                    throw err
                }
            })
        },
    }



module.exports = orm