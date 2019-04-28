var orm = require("../config/orm.js");

var burger = {
  selctAll: function(cb) {
    orm.all("burger", function(res) {
      cb(res);
    });
  },
  insertOne: function(cols, vals, cb) {
    orm.create("burger", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function( objColVals, condition, cb) {
    orm.update("burger", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;