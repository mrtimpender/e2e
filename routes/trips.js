// trips route. Create CRUD routes for our trips. Look at datbase structure for format

var express = require('express');
var router = express.Router();
var passport = require('passport')
var googleMaps = require('../controllers/google_maps_api/google_maps_api');

router.route('/')
  .get((req, res, next) => {
    // load new trip tempate
    res.render('trips/new_trip', {title: 'e2e | Trips'})
  })
  .post((req, res, next) => {
    // create new trip route
  })

router.route('/jon-test')
  .get((req, res, next) => {
    // load new trip tempate
    res.render('trips/new_trip_jon')
  })
  .post((req, res, next) => {
    // create new trip route
  })

router.get('/geocodeTest', function(req, res, next) {
    googleMaps.geocodeDirtyAddress('1341 niagara st denver').then((resp) => res.json(resp))
  // res.redirect('/dashboard/dashdash');
});
router.get('/auto', (req, res, next) => {
  res.render('testing/autocomplete')
})

module.exports = router;
