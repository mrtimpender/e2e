var express = require('express');
var router = express.Router();
var passport = require('passport')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('test');
});
router.get('/test', function(req, res, next) {
  res.render('test2');
});
router.get('/dashdash', function(req, res, next) {
  res.render('dashdash');
});

module.exports = router;
