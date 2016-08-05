require('dotenv').config({path:'../../.env'})
var Promise = require('bluebird')
var Uber = Promise.promisifyAll(require('node-uber'))
var uber = new Uber({
    client_id: process.env.uber_api_client_id,
    client_secret: process.env.uber_api_client_secret,
    server_token: process.env.uber_api_server_token,
    redirect_uri: 'http://localhost:3000/auth/uber/callback',
    name: 'e2e',
    language: 'en_US', // optional, defaults to en_US
    sandbox: true // optional, defaults to false
})
Promise.promisifyAll(uber)
Promise.promisifyAll(uber.estimates)
Promise.promisifyAll(uber.products)
Promise.promisify(uber.estimates.getETAForLocation)

var exportMethods = {
    uberAuth: (authorization_code, refreshToken) => {
        return uber.authorizationAsync({authorization_code, refreshToken})
    },
    getAllProductsForLocation: (lat, lng) => {
        return uber.products.getAllForLocationAsync(lat, lng)
    },
    getTimeEstimateForTrip: (lat, lng, prod_id) => {
        console.log(lat, lng);
        
        // console.log(parseFloat(lat).toFixed(4));
        // console.log(parseFloat(lat).toFixed(4));
        
         return uber.estimates.getETAForLocationAsync(
             parseFloat(lat).toFixed(4), parseFloat(lng).toFixed(4), prod_id
             )
    },
    getPriceEstimateForTrip: (trip) => {
        return uber.estimates.getPriceForRouteAsync(
            parseFloat(trip.origin_lat).toFixed(4),
            parseFloat(trip.origin_long).toFixed(4),
            parseFloat(trip.destination_lat).toFixed(4),
            parseFloat(trip.destination_long).toFixed(4)
        )
    }
}

var trip = {
    origin_lat: 3.1357,
    origin_long: 101.6880,
    destination_lat: 3.0833,
    destination_long: 101.6500
}

// exportMethods.getPriceEstimateForTrip(trip).then((res) => console.log(res))

// exportMethods.getAllProductsForLocation(39.7577737, -105.00713239999999).then((resp) => {
//     console.log(resp);
//     exportMethods.getTimeEstimateForTrip(39.7642529, -105.00383399999998, resp.products[0].product_id)
//         .then((resp) => console.log(resp))
    
// })
module.exports = exportMethods