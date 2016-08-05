var console = require('better-console');
var gm = require('./GoogleMaps')
var tripQueries = require('../database/trips/tripQueries')
var Promise = require('bluebird')
var exportMethods = {
  parseDirectionsData: (directions, trip_id, trans_id) => {
    return new Promise(function(resolve) {
      var directionsData = {
        directions_distance_val: directions.routes[0].legs[0].distance.value,
        directions_distance_text: directions.routes[0].legs[0].distance.text,
        directions_duration_val: directions.routes[0].legs[0].duration.value,
        directions_duration_in_traffic_text: directions.routes[0].legs[0].duration_in_traffic.text,
        directions_duration_in_traffic_val: directions.routes[0].legs[0].duration_in_traffic.value,
        directions_duration_text: directions.routes[0].legs[0].duration.text,
        directions_start_addr_location_lat: directions.routes[0].legs[0].start_location.lat,
        directions_start_addr_location_lng: directions.routes[0].legs[0].start_location.lng,
        directions_start_addr: directions.routes[0].legs[0].start_address,
        directions_end_addr_location_lat: directions.routes[0].legs[0].end_location.lat,
        directions_end_addr_location_lng: directions.routes[0].legs[0].end_location.lng,
        directions_end_addr: directions.routes[0].legs[0].end_address,
        directions_object: directions,
        trip_id,
        created_at: Date.now(),
        transit_method_id: trans_id
      }
      tripQueries.createTrip(directionsData).then((resp) => {
        // attempt at promise resolution
        resolve(resp)                    

        tripQueries.getTripById(trip_id).then((trip) => {
          var d = new Date(parseInt(resp[0].created_at))
          console.info(`Trip Directions inserted into DB for ${trip[0].trip_name } At:${d.getDate()}-${d.getMonth()+1}-${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`)
        })      
      })       
    })
  }
}
module.exports = exportMethods