var express = require("express");
const Oddcontroller = require("../controllers/OddController");

var router = express.Router();

router.get("/", Oddcontroller.oddList);

module.exports = router;