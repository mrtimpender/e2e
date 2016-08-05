var console = require('better-console');


var gmController = require('./lib/google_maps_api/googleMapsController')
var gm = require('./lib/google_maps_api/GoogleMaps')


console.log(process.env.uber_api_client_secret);


gm.getDirectionsFromAddresses('3358 Navajo St, Denver, CO 80211, USA' , '1644 Platte St, Denver, CO 80202, USA', 'driving').then((resp) => {
  gmController.parseDirectionsData(resp)
  // console.dir(JSON.stringify(resp))
})