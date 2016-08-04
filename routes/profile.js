var express = require('express');
var router = express.Router();
var passport = require('passport')

router.get('/', function(req, res, next) {
  res.render('profile/index', {title: 'e2e | Profile'});
})

module.exports = router;
