var UberApi = require('./UberApi')
var tripQueries = require('../database/trips/tripQueries')
var uberProductModel = require('../database/uberModels/uberProductModel')
var uberTripModel = require('../database/uberModels/uberTripModel')

var putProductLocatationData = (trip) => {
  return UberApi.getAllProductsForLocation(trip.origin_lat, trip.origin_lng)
    .then((uberProductData) => {
      return uberProductModel.createLocationProduct(uberProductData, trip.origin_loc_id)
    })
}

var putUberTripTimeData = (trip) => {
  return UberApi.getTimeEstimateForTrip(trip.destination_lat, trip.destination_lng)
    .then((tripTimeData) => {
      uberTripModel.createUberTrip(trip).then((trip) => {
        return uberTripModel.updateUberTripById(trip[0].id, { uber_time_estimates: JSON.stringify(tripTimeData.times) })
      })
    })
  }

exportMethods = {
  putEstimatesForUberTrip: (trip) => {
    putProductLocatationData(trip)
      .then(() => putUberTripTimeData(trip))
  }
}
module.exports = exportMethods