var express = require('express');
var router = express.Router();
var passport = require('passport')
/* GET home page. */
router.get('/', function(req, res, next) {
    console.log('*********');
    console.log(req.session);
    console.log('*********');
  res.render('dash/index', {
    title: 'e2e | Dashboard',
    id: req.session.passport.user.id,
    username: req.session.passport.user.username,
    firstname: req.session.passport.user.firstname,
    lastname: req.session.passport.user.lastname,
    fullname: req.session.passport.user.firstname + " " + req.session.passport.user.lastname,
    email: req.session.passport.user.email
    });
})

module.exports = router;
