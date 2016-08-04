var schedule = require('node-schedule')
var tripQueries = require('../database/trips/tripQueries')
var gmController = require('../google_maps_api/googleMapsController')
var GoogleMaps = require('../google_maps_api/google_maps_api')
 
var updateAllTrips = () => {
  tripQueries.getAllTrips().then((trips) => {
    trips.forEach((trip, key) => {
      GoogleMaps.getDirectionsFromAddresses({
        origin: trip.origin_formatted_address,
        destination: trip.destination_formatted_address,
        mode: trip.trans_mode,
        departure_time: new Date()
      }).then((apiRes) => {
        console.log(JSON.stringify(apiRes));
        
        gmController.parseDirectionsData(apiRes, trip.id)

      })
    })
    console.log(trips);
  })
}
var exportMethods = {
  runAll: (cron) => {
    schedule.scheduleJob(cron, function(){
    updateAllTrips()
    })
  }
}
module.exports = exportMethods