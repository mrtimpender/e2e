var express = require('express');
var router = express.Router();
var passport = require('passport');
var userQueries = require('../controllers/database/users/userQueries');
var geocode = require('../controllers/google_maps_api/GoogleMaps');
var db = require('../config/db');
var locationModel = require('../controllers/database/locations/locationModel')

// TODO set up session constructor

// var sessionConstructor = (session) => {
//   return {}
// }
// }
router.get('/', function(req, res, next) {
  userQueries.allLocations(req.session.passport.user).then(function(locations) {
    console.log(locations.rows[0].lat);
    console.log(locations.rows[0].lng);
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
    res.render('locations/newLocation', {
      title: 'e2e | Locations',
      id: req.session.passport.user.id,
      username: req.session.passport.user.username,
      firstname: req.session.passport.user.firstname,
      lastname: req.session.passport.user.lastname,
      fullname: req.session.passport.user.firstname + " " + req.session.passport.user.lastname,
      email: req.session.passport.user.email
      })
  })
  .post((req, res, next) => {
    geocode.geocodeDirtyAddress(req.body.address).then(function(latLong){
      // console.log(req.body.address);
      // console.log('******');
      // console.log(latLong);
      userQueries.addUserLocation(req.session.passport.user, req.body, latLong.results[0].geometry.location).then(function(){
        res.redirect('/locations');
      })
    });
  })

// edit location
router.get('/edit', (req, res, next) => res.redirect('/locations'))
router.route('/edit/:id')
  .get((req, res, next) => {
    locationModel.getLocationById(req.params.id).then((location) => {
      res.render('locations/editLocation', { location: location[0] })
    })
  })
  .post((req, res, next) => {
    geocode.geocodeDirtyAddress(req.body.address).then(function(latLong){
      console.log(latLong.results[0].geometry.location);
      console.log(req.session.passport.user.id);
      userQueries.editUserLocation(req.session.passport.user, req.body, latLong.results[0].geometry.location, req.params.id).then(function(){
        res.redirect('/locations');
      })
    });
  })

  // delete location
  // router.get('/delete:/id', (req, res, next) => res.redirect('/locations'))
  router.route('/delete/:id')
    .get((req, res, next) => {
      locationModel.deleteLocation(req.params.id).then((location) => {
        res.redirect('/locations')
      })
    });

module.exports = router;
