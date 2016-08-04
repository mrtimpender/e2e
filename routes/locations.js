var express = require('express');
var router = express.Router();
var passport = require('passport');
var userQueries = require('../lib/database/users/userQueries');
var db = require('../config/db');

router.post('/user_locations', function(req, res, next) {
  res.render('locations/userlocations');
})

module.exports = router;