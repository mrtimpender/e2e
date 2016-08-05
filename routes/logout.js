var express = require('express');
var router = express.Router();
var db = require('../config/db')

/* Destroy Session Variable and Redirect to login */
router.get('/', function(req, res, next) {
  req.session.destroy();
  res.redirect('/login');
})

module.exports = router;
