// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm.js');

//Burger model, calls the ORM's MySQL query constructing functions with parameters that are specific to the functionality of the application
const burger = {
  all(callback) {
    orm.selectAll(callback, 'burgers')
  },
  // The variables cols and vals are arrays.
  create(burgerName) {
    orm.insertOne('burgers', '(burger_name)', burgerName)
  },
  update(burgerID) {
    orm.updateOne('burgers', 'devoured', '1', 'id', burgerID)
  }
}

// Export the database functions for the controller (burgersController.js).
module.exports = burger;
