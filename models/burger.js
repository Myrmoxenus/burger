// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm.js');

const burger = {
  all(callback) {
    orm.selectAll(callback)
  },
  // The variables cols and vals are arrays.
  create(burgerName) {
    orm.insertOne(burgerName)
  },
  update(burgerID) {
    orm.updateOne(burgerID)
  }
}

// Export the database functions for the controller (burgersController.js).
module.exports = burger;
