var tripQueries = require('../database/trips/tripQueries')

var exportMethods = {
  returnAllTrips: () => {
    return tripQueries.getAllTrips()
  },
  returnTripsAndLocations: () => {
    return tripQueries.getTripsAndLocations()
  },
  returnSingleTrip: (id) => {
    return tripQueries.getTripById(id)
  },
  returnTransitMethod: (id) => {
    return tripQueries.getTripTransitDetails(id)
  }
}
module.exports = exportMethods
