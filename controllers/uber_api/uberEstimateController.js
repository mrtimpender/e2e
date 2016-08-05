var UberApi = require('./UberApi')
var tripQueries = require('../database/trips/tripQueries')

exportMethods = {
  putEstimatesForUberTrip: (trip) => {
   console.log(trip);
   UberApi.getAllProductsForLocation(trip).then((uberProductData) => {
     console.log('UBER PRODUCT DATA', uberProductData);
     
   })
   
  }
}
module.exports = exportMethods