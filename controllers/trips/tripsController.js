var tripQueries = require('../database/trips/tripQueries')

var exportMethods = {
  returnAllTrips: () => {
    return tripQueries.getAllTrips()
  },
  returnTripsAndLocaitons: () => {
    return tripQueries.getTripsAndLocations()
  }
}
module.exports = exportMethods