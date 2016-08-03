var Promise = require('bluebird')
var GoogleMapsAPI = require('googlemaps')
Promise.promisifyAll(GoogleMapsAPI)

var publicConfig = {
  key: process.env.google_maps_api_key,
  stagger_time:       1000, // for elevationPath
  encode_polylines:   false,
  secure:             true, // use https
};
var gmAPI = new GoogleMapsAPI(publicConfig);


Promise.promisifyAll(gmAPI)

module.exports = {
  geocodeDirtyAddress: (address) => {
  var geocodeParams = {
    "address":    address,
    "components": "components=country:US",
    "language":   "en",
    "region":     "us"
  }
     return gmAPI.geocodeAsync(geocodeParams)
  }
}






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