var express = require('express');
var router = express.Router();
var passport = require('passport')

router.get('/', function(req, res, next) {
  function uberTest(test) {
    if (req.session.passport.user.uuid) {
      return "Yes"
    } else {
      return "No"
    }
  }
  res.render('profile/index', {
    title: 'e2e | Dashboard',
    id: req.session.passport.user.id,
    username: req.session.passport.user.username,
    firstname: req.session.passport.user.firstname,
    lastname: req.session.passport.user.lastname,
    fullname: req.session.passport.user.firstname + " " + req.session.passport.user.lastname,
    email: req.session.passport.user.email,
    uber: uberTest(req.session.passport.user.uuid)
    });
})

module.exports = router;
