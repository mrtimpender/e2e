var passport = require('passport')
var lyftStrategy = require('passport-lyft').Strategy;
var LocalStrategy = require('passport-local').Strategy;
var uberStrategy = require('passport-uber').Strategy;
var db = require('../../config/db')
var userQueries = require('../database/users/userQueries')
var ModelBase = require('bookshelf-modelbase')(db.bookshelf);
var bcrypt = require('bcrypt')
var e2eUserTable = ModelBase.extend({
    tableName: 'e2e_users'
})
// uber 
passport.use(new uberStrategy({
    clientID: process.env.uber_api_client_id,
    clientSecret: process.env.uber_api_client_secret,
    callbackURL: "http://localhost:3000/auth/uber/callback",
    state: true
  },
  function(accessToken, refreshToken, profile, done) {    
    e2eUserTable.findOrCreateByProperty({
      e2e_uber_picture_url: profile.picture,
      e2e_firstname: profile.first_name,
      e2e_lastname: profile.last_name, 
      uber_uuid: profile.uuid,
      uber_rider_id: profile.rider_id,
      uber_key: accessToken,
      uber_access_token: accessToken,
      uber_refresh_token: refreshToken,
      e2e_email: profile.email
    }, {
      uber_uuid: profile.uuid
    }).then((response) => {
      e2eUserTable.update({
        uber_key: accessToken
      }, {
        id: response.id
      })      
      return done(null, profile)
    })
  }
))
// lyft
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
  new LocalStrategy({
      usernameField: 'username',
      passwordField: 'password',
      session: true
    },
    (username, password, done) => {
      console.log('IN LOCAL PASSPORT');
      console.log({
            e2e_username: username,
            e2e_password: bcrypt.hashSync(password, 10)
        })
        process.nextTick(function(){
          userQueries.userLoginCheck({e2e_username: username})
            .catch((e) => { return done(null, false)})
        .then((collection) => {
            if(collection.length > 0){
              if(bcrypt.compareSync(password, collection[0].e2e_password)){
                return done(null, true)
              } else {
                return done(null, false)
              }
            } else {
              return done(null, false)
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

