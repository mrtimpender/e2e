var express = require('express');
var router = express.Router();
var userQueries = require('../lib/database/users/userQueries')
var db = require('../config/db')
var modelBase = require('bookshelf-modelbase')(db.bookshelf)

// login route
router.get('/', (req, res, next) => {
  res.render('login/index')
})
// forgot password
router.get('/forgot_pass', (req, res, next) => {
  res.render('login/forgot_pass')
})
// register
router.route('/register') 
  .get((req, res, next) => {
    res.render('login/register')
  })
  .post((req, res, next) => {    
    modelBase.create({
      e2e_username: req.body.e2e_username,
      e2e_password: req.body.e2e_passowrd,
      e2e_email: req.body.e2e_email
    }, {
      e2e_username: req.body.e2e_username
    }).then((resp) => {
      res.sendStatus(200)
    })
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
