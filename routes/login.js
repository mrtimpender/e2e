var express = require('express');
var router = express.Router();

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

module.exports = router;
