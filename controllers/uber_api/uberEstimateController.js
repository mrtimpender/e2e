var UberApi = require('./UberApi')
var tripQueries = require('../database/trips/tripQueries')
var uberProductModel = require('../database/uberModels/uberProductModel')

exportMethods = {
  putEstimatesForUberTrip: (trip) => {
   UberApi.getAllProductsForLocation(trip.origin_lat, trip.origin_lng)
    .then((uberProductData) => {
      uberProductModel.createLocationProduct(uberProductData, trip.origin_loc_id)
        .then((uberTripFromDb) => {
          console.log(trip);
          
          // UberApi.getPriceEstimateForTrip(trip).then((tripPriceData) => {
          //   console.log(tripPriceData);
            
          // })
          // console.log(uberProductData)
        })     
    })
  }
}
module.exports = exportMethods