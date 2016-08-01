var passport = require('passport')
var lyftStrategy = require('passport-lyft').Strategy;
// var userQueries = require('./database/users/userQueries')

passport.use(new lyftStrategy({
    clientID: process.env.lyft_api_client_id,
    clientSecret: process.env.lyft_api_client_secret,
    callbackURL: 'http://localhost:3000/lyftAuth',
    state: true
  },
  function(accessToken, refreshToken, profile, done) {
    console.log('inside lift strategy');
      
    var user = profile;
    console.log(profile);
    console.log(accessToken);
    // console.log(userQueries);
    
    
    user.accessToken = accessToken;
    return done(null, user); 
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

