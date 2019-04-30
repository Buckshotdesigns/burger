var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burger", function(res) {
      cb(res);
    });
  },
  insertOne: function(cols, cb) {
    orm.insertOne(cols, cb, function(res) {
      cb(res);
    });
  },
  updateOne: function( id, cb) {
    orm.updateOne(id, cb, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;