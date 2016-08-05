var schedule = require('node-schedule')
var tripQueries = require('../database/trips/tripQueries')
var gmController = require('../google_maps_api/googleMapsController')
var GoogleMaps = require('../google_maps_api/google_maps_api')
var uberEstimateCtrl = require('../uber_api/uberEstimateController')
var Promise = require('bluebird')

 
var updateAllTrips = () => {
  tripQueries.getAllTrips().then((trips) => {
    trips.forEach((trip, key) => {
      GoogleMaps.getDirectionsFromAddresses({
        origin: trip.origin_formatted_address,
        destination: trip.destination_formatted_address,
        mode: trip.trans_mode,
        departure_time: new Date()
      }).then((apiRes) => { 
        console.log("API Response from google maps");
               
        console.log(gmController.parseDirectionsData(apiRes, trip.id, trip.transit_method_id))
        gmController.parseDirectionsData(apiRes, trip.id, trip.transit_method_id).then(() => {
          // get uber product data for starting address.
          console.log(tripQueries.getTripTransitMethod(trip.transit_method_id));
          console.log("IS THERE ANYBODY OUT THERE");
          
          if(tripQueries.getTripTransitMethod(trip.transit_method_id) == "UBER"){
            console.log("THIS IS AN UBER TRIP");
            
          }
          // uberEstimateCtrl.
        })
      })
    })
  })
}
var exportMethods = {
  runAll: (cron) => { schedule.scheduleJob(cron, () => updateAllTrips()) }
}
module.exports = exportMethods