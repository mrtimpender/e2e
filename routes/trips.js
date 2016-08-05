// trips route. Create CRUD routes for our trips. Look at datbase structure for format

var express = require('express');
var router = express.Router();
var passport = require('passport')
var googleMaps = require('../controllers/google_maps_api/GoogleMaps')
var tripsController = require('../controllers/trips/tripsController')

router.route('/')
  .get((req, res, next) => {
  tripsController.returnTripsAndLocaitons().then((trips) => res.render('trips/my_trips', {
    trips:trips.rows,
    title: 'e2e | New Trip',
    id: req.session.passport.user.id,
    username: req.session.passport.user.username,
    firstname: req.session.passport.user.firstname,
    lastname: req.session.passport.user.lastname,
    fullname: req.session.passport.user.firstname + " " + req.session.passport.user.lastname,
    email: req.session.passport.user.email
  }))
})

router.route('/new')
  .get((req, res, next) => {
    // load new trip tempate
    res.render('trips/new_trip', {
      title: 'e2e | New Trip',
      id: req.session.passport.user.id,
      username: req.session.passport.user.username,
      firstname: req.session.passport.user.firstname,
      lastname: req.session.passport.user.lastname,
      fullname: req.session.passport.user.firstname + " " + req.session.passport.user.lastname,
      email: req.session.passport.user.email
      });
  })
  .post((req, res, next) => {
    // create new trip route
  })

  // router.route('/edit/:id')
  //   .get((req, res, next) => {
  //
  //
  //     res.render('trips/new_trip', {
  //       title: 'e2e | Dashboard',
  //       id: req.session.passport.user.id,
  //       username: req.session.passport.user.username,
  //       firstname: req.session.passport.user.firstname,
  //       lastname: req.session.passport.user.lastname,
  //       fullname: req.session.passport.user.firstname + " " + req.session.passport.user.lastname,
  //       email: req.session.passport.user.email
  //       });
  //   })
  //   .post((req, res, next) => {
  //     // create edit trip route
  //   })

module.exports = router;
