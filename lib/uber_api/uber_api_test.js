// https://github.com/shernshiou/node-uber
var Uber = require('node-uber')
var uber = new Uber({
    client_id: process.env.uber_api_client_id,
    client_secret: process.env.uber_api_client_secret,
    server_token: process.env.uber_api_server_token,
    redirect_uri: 'http://localhost:3000/auth/uber/callback',
    name: 'e2e',
    language: 'en_US', // optional, defaults to en_US
    sandbox: true // optional, defaults to false
})
// get authorization URL
var authURL = uber.getAuthorizeUrl(['history','profile', 'request', 'places']);

console.log(authURL);


var userToken = (token) => {
     uber.authorization({
        // this code will be provided via the callback after logging in using the authURL
        refresh_token: 'WsVhHCnAr6MfHS99C2k1gY4DZiQvUl'
    }, () => {
        uber.products.getAllForLocation(3.1357, 101.6880, function(err, res) {
            if (err) console.error(err);
            else console.log(JSON.stringify(res));
        })
    })
}



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