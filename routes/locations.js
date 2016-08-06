var express = require('express');
var router = express.Router();
var passport = require('passport');
var userQueries = require('../controllers/database/users/userQueries');
var geocode = require('../controllers/google_maps_api/GoogleMaps');
var db = require('../config/db');

// TODO set up session constructor

// var sessionConstructor = (session) => {
//   return {}
// }
// }
router.get('/', function(req, res, next) {
  userQueries.allLocations(req.session.passport.user).then(function(locations) {
    res.render('locations/locationCardList', {
      locations: locations.rows,
      title: 'e2e | Locations',
      id: req.session.passport.user.id,
      username: req.session.passport.user.username,
      firstname: req.session.passport.user.firstname,
      lastname: req.session.passport.user.lastname,
      fullname: req.session.passport.user.firstname + " " + req.session.passport.user.lastname,
      email: req.session.passport.user.email
      });
    })
})
// new location
router.route('/new')
  .get((req, res, next) => {
    res.render('locations/newLocation')
  })
  .post((req, res, next) => {
    res.json(req.body)
  })
// edit location
router.route('/edit/:id')
  .get((req, res, next) => {
    res.render('locations/editLocation', { location_id: req.params.id })
  })
  .post((req, res, next) => {
    // create new location
  })
router.post('/userlocations', function(req, res, next) {
  geocode.geocodeDirtyAddress(req.body.address).then(function(latLong){
    console.log(latLong.results[0].geometry.location);
    console.log(req.session.passport.user.id);
    userQueries.addUserLocation(req.session.passport.user, req.body, latLong.results[0].geometry.location).then(function(){
      res.redirect('/locations');
    })
  });
})

module.exports = router;
