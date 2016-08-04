var console = require('better-console');
var gm = require('./google_maps_api')
var tripQueries = require('../database/trips/tripQueries')

console.log(process.env.uber_api_client_secret);

var exportMethods = {
  parseDirectionsData: (directions) => {
 
    var directionsData = {
      directions_distance_val: directions.routes[0].legs[0].distance.value,
      directions_distance_text: directions.routes[0].legs[0].distance.text,
      directions_duration_val: directions.routes[0].legs[0].duration.value,
      directions_duration_text: directions.routes[0].legs[0].duration.text,
      directions_start_addr_location_lat: directions.routes[0].legs[0].start_location.lat,
      directions_start_addr_location_lng: directions.routes[0].legs[0].start_location.lng,
      directions_start_addr: directions.routes[0].legs[0].start_address,
      directions_end_addr_location_lat: directions.routes[0].legs[0].end_location.lat,
      directions_end_addr_location_lng: directions.routes[0].legs[0].end_location.lng,
      directions_end_addr: directions.routes[0].legs[0].end_address,
      directions_object: directions
    }
    tripQueries.createTrip(directionsData).then((resp) => {
      console.log(resp);
      
    })
    console.log(directionsData);  
    
  }
}

// gm.getDirectionsFromAddresses('3358 Navajo St, Denver, CO 80211, USA' , '1644 Platte St, Denver, CO 80202, USA', 'driving').then((resp) => {
//   console.dir(JSON.stringify(resp))
// })

module.exports = exportMethods