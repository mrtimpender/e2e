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
