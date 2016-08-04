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
Promise.promisifyAll(uber.estimates)

var exportMethods = {
    
    getAllProductsForLocation: (lat, lng) => {

    },
    getTimeEstimateForTrip: (trip) => {
        return uber.extimates.getPriceForRouteAsync(
            trip.origin_lat,
            trip.origin_long,
            trip.destination_lat,
            trip.destination_long
        )
    },
    getPriceEstimateForTrip: (trip) => {

    }
}
var userToken = (token) => {
     uber.authorization({ code: 'NOvmjCRgINArV9Dz9OehquaNNMI36n'}, () => {
        // uber.products.getAllForLocation(3.1357, 101.6880, function(err, res) {
            uber.estimates.getPriceForRouteAsync(3.1357, 101.6880, 3.0833, 101.6500)
            .then((res) => {
                 console.log(JSON.stringify(res));

            })
     })

}

// console.log(authURL);
// console.log(process.env.uber_api_client_id)

console.log(userToken());


// uber.authorization({
//     // this code will be provided via the callback after logging in using the authURL
//     authorization_code: authURL
// }, function(err, access_token, refresh_token) {
//     if (err) console.error(err);
//     else {
//         console.log('Your access_token is: ' + access_token);
//         console.log('Your refresh_token is: ' + refresh_token);

//         uber.products.getAllForLocation(3.1357, 101.6880, function(err, res) {
//             if (err) console.error(err);
//             else console.log(res);
//         });
//     }
// });