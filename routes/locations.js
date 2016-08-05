var express = require('express');
var router = express.Router();
var passport = require('passport');
var userQueries = require('../controllers/database/users/userQueries');
var db = require('../config/db');

router.get('/', function(req, res, next) {
  res.render('locations/userlocations', {
    title: 'e2e | Dashboard',
    id: req.session.passport.user.id,
    username: req.session.passport.user.username,
    firstname: req.session.passport.user.firstname,
    lastname: req.session.passport.user.lastname,
    fullname: req.session.passport.user.firstname + " " + req.session.passport.user.lastname,
    email: req.session.passport.user.email
    });
})

router.post('/user_locations', function(req, res, next) {
  res.render('locations/userlocations');
})

module.exports = router;
