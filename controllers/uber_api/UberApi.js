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
        console.log('lat, lng', lat, lng);
        
        return uber.products.getAllForLocationAsync(lat, lng)
    },
    getTimeEstimateForTrip: (lat, lng, prod_id) => {
         return uber.estimates.getETAForLocationAsync(
             parseFloat(lat).toFixed(4), parseFloat(lng).toFixed(4), prod_id)
    },
    getPriceEstimateForTrip: (trip) => {        
        return uber.estimates.getPriceForRouteAsync(
          trip.origin_lat, trip.origin_lng, trip.destination_lat, trip.destination_lng
        )
    }
}
module.exports = exportMethods