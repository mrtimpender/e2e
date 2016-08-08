var tripQueries = require('../database/trips/tripQueries')
var locationModel = require('../database/locations/locationModel')
var Promise = require('bluebird')

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
  },
  tripLocationId: (address) => {
    return new Promise(function(resolve){
      locationModel.getLocationIdByAddress(address)
    })
  },
  tripAddressPicker: (new_origin, existing_origin, new_destination, existing_destination) => {
    return new Promise(function(resolve){
      var tripAddressObj = {};
      if (new_origin.length > 0 && new_destination.length > 0) {
         tripAddressObj.startAddress = new_origin
         tripAddressObj.endAddress = new_destination
         tripAddressObj.startId = null
         tripAddressObj.endId = null
         resolve(tripAddressObj)
      } else if (new_origin.length > 0 && existing_destination.length > 0){
        tripAddressObj.startAddress = new_origin
        tripAddressObj.endAddress = existing_destination
        tripAddressObj.startId = null
        tripAddressObj.endId = null
        resolve(tripAddressObj)
      } else if (existing_origin.length > 0 && new_destination.length > 0){
        tripAddressObj.startAddress = existing_origin
        tripAddressObj.endAddress = new_destination
        tripAddressObj.startId = null
        tripAddressObj.endId = null
        resolve(tripAddressObj)
      } else {
        tripAddressObj.startAddress = existing_origin
        tripAddressObj.endAddress = existing_destination
        tripAddressObj.startId = null
        tripAddressObj.endId = null
        resolve(tripAddressObj)
      }
    })
  }
}
Promise.promisify(exportMethods.tripAddressPicker);

module.exports = exportMethods
