  // trips route. Create CRUD routes for our trips. Look at datbase structure for format

var express = require('express');
var router = express.Router();
var passport = require('passport')
var googleMaps = require('../controllers/google_maps_api/GoogleMaps')
var tripsController = require('../controllers/trips/tripsController')
var userQueries = require('../controllers/database/users/userQueries');
var googleTrafficChartModel = require('../controllers/database/chartingModels/googleTrafficChartModel')

router.route('/')
  .get((req, res, next) => {
  tripsController.returnTripsAndLocations().then((trips) => res.render('trips/my_trips', {
    trips:trips.rows,
    title: 'e2e | My Trips',
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
    userQueries.allLocations(req.session.passport.user).then(function(locations) {
      res.render('trips/new_trip', {
        locations: locations.rows,
        title: 'e2e | New Trip',
        id: req.session.passport.user.id,
        username: req.session.passport.user.username,
        firstname: req.session.passport.user.firstname,
        lastname: req.session.passport.user.lastname,
        fullname: req.session.passport.user.firstname + " " + req.session.passport.user.lastname,
        email: req.session.passport.user.email
        });
      })
    })
  .post((req, res, next) => {
    // create new trip route
    res.json(req.body)
    console.log(  res.json(req.body));
  })

router.route('/edit/:id')
  .get((req, res, next) => {
    tripsController.returnSingleTrip(req.params.id).then((trip) => {
      tripsController.returnTransitMethod(trip[0].transit_method_id).then((trans_method) => {
        console.log(trans_method);
        // console.log(trip[0].transit_method_id);
        res.render('trips/edit_trip', {
          trip: trip[0],
          trans_method: trans_method[0].transit_type,
          title: 'e2e | Edit This Trip',
          id: req.session.passport.user.id,
          username: req.session.passport.user.username,
          firstname: req.session.passport.user.firstname,
          lastname: req.session.passport.user.lastname,
          fullname: req.session.passport.user.firstname + " " + req.session.passport.user.lastname,
          email: req.session.passport.user.email
        })
      })
    })
  })
    .post((req, res, next) => {
      // create new trip route
  })


router.route('/delete/:id')
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

// chart data for google maps
router.get('/googleMapsChartData', (req, res, next) => {
  googleTrafficChartModel.getAllTripTimeEstimates().then((estimates) => res.json(estimates))
})
module.exports = router;
