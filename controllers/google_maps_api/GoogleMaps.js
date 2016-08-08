var Promise = require('bluebird')
var GoogleMapsAPI = require('googlemaps')
Promise.promisifyAll(GoogleMapsAPI)

var directionsConfig = {
 key: process.env.google_maps_api_directions_key,
 stagger_time:       1000, // for elevationPath
 encode_polylines:   false,
 secure:             true, // use https
}

var geocoderConfig = {
 key: process.env.google_maps_api_key,
 stagger_time:       1000, // for elevationPath
 encode_polylines:   false,
 secure:             true, // use https
}


var geocoderGmAPI = new GoogleMapsAPI(geocoderConfig)
var directionsGmAPI = new GoogleMapsAPI(directionsConfig)

Promise.promisifyAll(geocoderGmAPI)
Promise.promisifyAll(directionsGmAPI)

var exportMethods = {
 geocodeDirtyAddress: (address) => {
   var geocodeParams = {
     "address":    address,
     "components": "components=country:US",
     "language":   "en",
     "region":     "us"
   }
    return geocoderGmAPI.geocodeAsync(geocodeParams)
 },
 // get directions from address
 getDirectionsFromAddresses: (params) => {
   // var params = { origin, destination, mode }
   return directionsGmAPI.directionsAsync(params)
 }
}

module.exports = exportMethods





// // reverse geocode API
// var reverseGeocodeParams = {
//   "latlng":        "51.1245,-0.0523",
//   "result_type":   "postal_code",
//   "language":      "en",
//   "location_type": "APPROXIMATE"
// };

// gmAPI.reverseGeocode(reverseGeocodeParams, function(err, result){
//   console.log(result);
// });
