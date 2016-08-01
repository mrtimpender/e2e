var express = require('express');
var router = express.Router();
var userQueries = require('../lib/database/users/userQueries')
// login route
router.get('/', (req, res, next) => {
  res.render('login/index')
})
// forgot password
router.get('/forgot_pass', (req, res, next) => {
  res.render('login/forgot_pass')
})
// register
router.get('/register', (req, res, next) => {
  res.render('login/register')
})
// after oauth register
router.route('/completeRegistration')
  .get((req, res, next) => {
    res.render('login/additional_info', {
      lyft_key: req.session.passport.user.accessToken
    })
  })
  .post((req, res, next) => {
    userQueries.createUser(req.body).then((resp) => res.redirect('/'))

  }) 
module.exports = router;
