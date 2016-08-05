var express = require('express');
var router = express.Router();
var passport = require('passport');
var userQueries = require('../controllers/database/users/userQueries');
var geocode = require('../controllers/google_maps_api/GoogleMaps');
var db = require('../config/db');

router.get('/', function(req, res, next) {
  res.render('locations/userlocations', {title: 'e2e | Locations'});
})

router.post('/userlocations', function(req, res, next) {
  geocode.geocodeDirtyAddress(req.body.address).then(function(ll){
    console.log(ll.results[0].geometry.location);
    console.log(req.session.id);
    
  });
})

module.exports = router;
