var UberApi = require('./UberApi')
var tripQueries = require('../database/trips/tripQueries')
var uberProductModel = require('../database/uberModels/uberProductModel')

exportMethods = {
  putEstimatesForUberTrip: (trip) => {
   UberApi.getAllProductsForLocation(trip.origin_lat, trip.origin_lng)
    .then((uberProductData) => {
      uberProductModel.createLocationProduct(uberProductData, trip.origin_loc_id)
        .then((uberTripFromDb) => {
          // UberApi.getPriceEstimateForTrip().then(())
          // console.log(uberProductData)
        })     
    })
  }
}
module.exports = exportMethods