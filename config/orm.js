const connection = require('./connection');

//ORM object composed of functions that can construct MySQL queries generally. 
const orm = {
    //Selects entire table
        selectAll(callback, tableName) {
            let query = 'SELECT * FROM ' + tableName
            connection.query(query, (err, res) => {
                if (err) {
                    throw err
                }
                callback(res)
            })
        },
        //Inserts into a table a parameter at a specified value
        insertOne(tableName, parameterName, parameterValue) {
            let query = 'INSERT INTO ' + tableName + parameterName +' VALUES (' + parameterValue + ')'
            connection.query(query, (err, res) => {
                if (err){
                    throw err
                }
            })
        },
        //Updates a table by a specified parameter to be changed, value to be changed to, paramater used to find the value to update, and finally the value to change it to
        updateOne(tableName, parameterBeingChanged, valueItsBeingChangedTo, parameterItsBeingIdentifiedBy, valueItsBeingIdentifiedBy) {
            let query = 'UPDATE ' + tableName + ' SET ' + parameterBeingChanged + ' = ' + valueItsBeingChangedTo + ' WHERE ' + parameterItsBeingIdentifiedBy + ' = '  + valueItsBeingIdentifiedBy
            connection.query(query, (err, res) => {
                if (err) {
                    throw err
                }
            })
        },
    }



module.exports = orm