var express = require('express');
var router = express.Router();
var userQueries = require('../lib/database/users/userQueries')
var db = require('../config/db')
var modelBase = require('bookshelf-modelbase')(db.bookshelf)
var userTable = modelBase.extend({
    tableName: 'e2e_users'
});
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
    userTable.findOrCreateByProperty({
      e2e_username: req.body.e2e_username,
      e2e_password: req.body.e2e_passowrd,
      e2e_email: req.body.e2e_email
    }, {
      e2e_username: req.body.e2e_username
    }).then((resp) => {
      res.render('login/index', {message:"Account created. Please login."})
    }).catch((e) => console.log(e))
  })

// after oauth register
router.route('/completeRegistration')
  .get((req, res, next) => {
    res.render('login/additional_info', {
      uber_uuid: req.session.passport.user.uuid
    })
  })
  .post((req, res, next) => {
    console.log(req.body);
    
    db.knex('e2e_users')
      .where('uber_uuid', req.body.uber_uuid)
      .update({
        e2e_password: req.body.e2e_password,
        e2e_username: req.body.e2e_username
      }).then((resp) => {
      res.redirect('/dashTest')
    })

  })
module.exports = router;
