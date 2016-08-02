var express = require('express');
var router = express.Router();
var passport = require('passport')
var userQueries = require('../lib/database/users/userQueries')
/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express Yeah!' });
})
router.get('/dashTest', (req, res, next) => {
  res.render('dash/index')
})

router.get('/profileTest', (req, res, next) => {
  res.render('dash/profile')
})

router.get('/allUsers', (req, res, next) => {
  userQueries.getAllUsers().then((resp) => res.json(resp))
})

router.get('/auth/lyft',
  passport.authenticate('lyft', { scope: ['public','profile','rides.read'] }
));

router.get('/lyftAuth', passport.authenticate('lyft', { failureRedirect: '/fail' }),
  (req, res) => {
    console.log(req.session);

  // create entry in user table with our token
  res.redirect('/login/completeRegistration')
});

module.exports = router;
