var schedule = require('node-schedule')
var tripQueries = require('../database/trips/tripQueries')
var gmController = require('../google_maps_api/googleMapsController')
var GoogleMaps = require('../google_maps_api/google_maps_api')
var uberEstimateCtrl = require('../uber_api/uberEstimateController')
 
var updateAllTrips = () => {
  tripQueries.getAllTrips().then((trips) => {
    trips.forEach((trip, key) => {
      // is this trip an uber?

      GoogleMaps.getDirectionsFromAddresses({
        origin: trip.origin_formatted_address,
        destination: trip.destination_formatted_address,
        mode: trip.trans_mode,
        departure_time: new Date()
      }).then((apiRes) => {        
        gmController.parseDirectionsData(apiRes, trip.id)
      })
    })
  })
}
var exportMethods = {
  runAll: (cron) => { schedule.scheduleJob(cron, () => updateAllTrips()) }
}
module.exports = exportMethods