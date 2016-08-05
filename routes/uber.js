var express = require('express');
var router = express.Router();
var passport = require('passport')
var userQueries = require('../controllers/database/users/userQueries')
var db = require('../config/db')
var uber = require('../controllers/uber_api/uber_api')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('uber', {uber: 'UBER TEST'});
});

module.exports = router;
