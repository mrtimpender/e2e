var express = require('express');
var router = express.Router();
var passport = require('passport')
var dashboardCountModel = require('../controllers/database/dashboardModels/dashCountModel')
/* GET home page. */
router.get('/oldDash', function(req, res, next) {
    console.log('*********');
    console.log(req.session);
    console.log('*********');
  res.render('dash/index', {
    title: 'e2e | Dashboard',
    id: req.session.passport.user.id,
    username: req.session.passport.user.username,
    firstname: req.session.passport.user.firstname,
    lastname: req.session.passport.user.lastname,
    fullname: req.session.passport.user.firstname + " " + req.session.passport.user.lastname,
    email: req.session.passport.user.email
    });
})
router.get('/', (req, res, next) => {
  dashboardCountModel.getApiCountsByUserId(req.session.passport.user.id).then((db_counts) => {
    console.log(db_counts)
    res.render('dash/chartDash', {
      title: 'e2e | Dashboard',
      id: req.session.passport.user.id,
      username: req.session.passport.user.username,
      firstname: req.session.passport.user.firstname,
      lastname: req.session.passport.user.lastname,
      fullname: req.session.passport.user.firstname + " " + req.session.passport.user.lastname,
      email: req.session.passport.user.email,
      counts: {
        uber_api_count: db_counts.rows[0].count,
        google_api_count: db_counts.rows[3].count,
        user_location_count: db_counts.rows[2].count,
        user_trips_count: db_counts.rows[1].count
      }
    })    
  })
})

module.exports = router;
