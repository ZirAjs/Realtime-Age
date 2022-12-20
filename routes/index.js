var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/timer/", function (req, res, next) {
  res.render("timer", { age: req.query.age });
});

module.exports = router;
