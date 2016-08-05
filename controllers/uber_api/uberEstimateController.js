var UberApi = require('./UberApi')
var tripQueries = require('../database/trips/tripQueries')
var uberProductModel = require('../database/uberModels/uberProductModel')
var uberTripModel = require('../database/uberModels/uberTripModel')

var putProductLocatationData = (trip) => {
  UberApi.getAllProductsForLocation(trip.origin_lat, trip.origin_lng)
    .then((uberProductData) => {
      return uberProductModel.createLocationProduct(uberProductData, trip.origin_lng)
    })
}
var putUberTripTimeData = (trip) => {
  UberApi.getTimeEstimateForTrip(trip.destination_lat, trip.destination_lng)
    .then((tripTimeData) => {
      uberTripModel.createUberTrip(trip).then((trip) => {
        console.log('tripid',trip.id);
        console.log('trip TIME DATA',tripTimeData);
        
        return uberTripModel.updateUberTripById(trip.id, { uber_time_estimates: tripTimeData.time })
      })
    })
}


exportMethods = {
  // putEstimatesForUberTrip: (trip) => {
  //  UberApi.getAllProductsForLocation(trip.origin_lat, trip.origin_lng)
  //   .then((uberProductData) => {
  //     uberProductModel.createLocationProduct(uberProductData, trip.origin_loc_id)
  //       .then((uberTripFromDb) => {
  //         console.log(trip);
          
  //         UberApi.getTimeEstimateForTrip(trip.destination_lat, trip.destination_lng)
  //           .then((tripTimeData) => {
  //           console.log("Trip time data here!",tripTimeData);
            
  //         })
  //         // console.log(uberProductData)
  //       })     
  //   })
  // },


  putEstimatesForUberTrip: (trip) => {
    putProductLocatationData(trip)
    putUberTripTimeData(trip)
  }
}
module.exports = exportMethods