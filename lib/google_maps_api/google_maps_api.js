var Promise = require('bluebird')
var GoogleMapsAPI = require('googlemaps')
Promise.promisifyAll(GoogleMapsAPI)
var publicConfig = {
  key: 'AIzaSyACKB6CHqJawccpMgrKoJj6Ca-IRDAdTWE',
  stagger_time:       1000, // for elevationPath
  encode_polylines:   false,
  secure:             true, // use https
}
var gmAPI = new GoogleMapsAPI(publicConfig);
Promise.promisifyAll(gmAPI)
var exportMethods = {
  geocodeDirtyAddress: (address) => {
    var geocodeParams = {
      "address":    address,
      "components": "components=country:US",
      "language":   "en",
      "region":     "us"
    }
     return gmAPI.geocodeAsync(geocodeParams)
  },
  // get directions from address
  getDirectionsFromAddresses: (params) => {
    // var params = { origin, destination, mode }
    return gmAPI.directionsAsync(params)
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