var UberApi = require('./UberApi')
var tripQueries = require('../database/trips/tripQueries')
var uberProductModel = require('../database/uberModels/uberProductModel')

exportMethods = {
  putEstimatesForUberTrip: (trip) => {
   console.log(trip);
   UberApi.getAllProductsForLocation(trip.origin_lat, trip.origin_lng)
    .then((uberProductData) => {
      uberProductModel.createProduct(uberProductData, trip.origin_loc_id)
        .then((response) => console.log(response))
       console.log('UBER PRODUCT DATA', uberProductData);
     
    })
   
  }
}
module.exports = exportMethods