var passport = require('passport')
var lyftStrategy = require('passport-lyft').Strategy;


passport.use(new lyftStrategy({
    clientID: process.env.lyft_api_client_id,
    clientSecret: process.env.lyft_api_client_secret,
    callbackURL: 'http://localhost:3000/lyftAuth',
    state: true
  },
  function(accessToken, refreshToken, profile, done) {
    var user = profile;
    console.log(profile);
    console.log(accessToken);
    
    
    user.accessToken = accessToken;
    return done(null, user); 
  }
));

