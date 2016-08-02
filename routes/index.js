var express = require('express');
var router = express.Router();
var passport = require('passport')
var userQueries = require('../lib/database/users/userQueries')
var db = require('../config/db')
/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express Yeah!' });
})
router.get('/dashTest', (req, res, next) => {
  res.render('dash/profile')
})

router.get('/allUsers', (req, res, next) => {
  userQueries.getAllUsers().then((resp) => res.json(resp))
})


router.get('/auth/uber', passport.authenticate('uber'));
router.get('/auth/uber/callback', 
  passport.authenticate('uber', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect to auth completion OR dashboard
    userQueries.getUserByUuid(req.session.passport.user.uuid).then((resp) => {
      if(resp.length  === 1){
        res.redirect('/dashTest')
      } else {
        res.redirect('/login/completeRegistration');
      }
    })
  });


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
