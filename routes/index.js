var express = require('express');
var router = express.Router();
var passport = require('passport')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Yeah!' });
  console.log(process.env.lyft_api_client_id);
  
});

router.get('/auth/lyft',
  passport.authenticate('lyft', { scope: ['public','profile'] }
));
 
router.get('/lyftAuth', passport.authenticate('lyft', { failureRedirect: '/test' }),
  function(req, res) {
    res.redirect('/');
});

module.exports = router;
