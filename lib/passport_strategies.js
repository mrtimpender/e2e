var passport = require('passport')
var lyftStrategy = require('passport-lyft').Strategy;
var LocalStrategy = require('passport-local').Strategy;
var db = require('../config/db')
// var userQueries = require('./database/users/userQueries')
var ModelBase = require('bookshelf-modelbase')(db.bookshelf);
// bring in user table
var e2eUserTable = ModelBase.extend({
    tableName: 'e2e_users'
})

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
// passport local Strategy
passport.use(
  new LocalStrategy(
    function(username, password, done){
      console.log(username + password);
      process.nextTick(function(){
        User.findOne({
          e2e_username: username,
          e2e_password: password
        }).catch(function(e){
          return done(null, false)
        }).then(function(collection){
          if(collection){
            return done(null, collection)
          }
        })
      })
    }
  )
)
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

