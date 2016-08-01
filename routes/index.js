var express = require('express');
var router = express.Router();
var passport = require('passport')
// var userQueries = require('../lib/database/users/userQueries')
/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express Yeah!' });
  console.log(process.env.lyft_api_client_id);
  
});

router.get('/auth/lyft',
  passport.authenticate('lyft', { scope: ['public','profile','rides.read'] }
));
 
router.get('/lyftAuth', passport.authenticate('lyft', { failureRedirect: '/fail' }),
  (req, res) => {
  // create entry in user table with our token

    res.redirect('/');
});

module.exports = router;
