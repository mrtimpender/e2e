var express = require('express');
var router = express.Router();
var passport = require('passport')
/* GET home page. */

router.post('/', function(req, res, next) {
  
  res.redirect('/dashboard/dashdash');
});

module.exports = router;
