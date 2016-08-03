var express = require('express');
var router = express.Router();
var passport = require('passport')
var googleMaps = require('../lib/google_maps_api/google_maps_api');
/* GET home page. */

router.get('/geocode', function(req, res, next) {
  console.log(googleMaps);
  
  // res.json(req.body)
  googleMaps.geocodeDirtyAddress('1341 niagara st denver').then((resp) => res.json(resp))
  // res.redirect('/dashboard/dashdash');
});
router.get('/auto', (req, res, next) => {
  res.render('testing/autocomplete')
})

module.exports = router;
