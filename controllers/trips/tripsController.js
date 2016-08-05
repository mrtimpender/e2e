var tripQueries = require('../database/trips/tripQueries')

var exportMethods = {
  returnAllTrips: () => {
    return tripQueries.getAllTrips()
  }
}
module.exports = exportMethods