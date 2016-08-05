var express = require('express');
var router = express.Router();
var passport = require('passport')
var userQueries = require('../controllers/database/users/userQueries')
var db = require('../config/db')
var uber = require('../controllers/uber_api/UberApi')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('uber', {
    title: 'e2e | Dashboard',
    id: req.session.passport.user.id,
    username: req.session.passport.user.username,
    firstname: req.session.passport.user.firstname,
    lastname: req.session.passport.user.lastname,
    fullname: req.session.passport.user.firstname + " " + req.session.passport.user.lastname,
    email: req.session.passport.user.email
    });
});

module.exports = router;
