var environment = process.env.NODE_ENV || 'development';
var config = require('../knexfile.js')[environment];
// bookshelf = require('bookshelf')(config);
// module.exports = require('knex')(config);
var knex = require('knex')(config)
module.exports = {
  knex: knex,
  bookshelf: require('bookshelf')(knex)
}