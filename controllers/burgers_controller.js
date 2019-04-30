var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burger: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  router.post("/api/burger", function(req, res) {
    burger.insertOne([req.body.burger_name], function() {
     res.redirect("/");
    });
  });

  module.exports = router;