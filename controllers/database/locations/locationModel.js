var db = require('../../../config/db')

module.exports = {
  getAllLocaitons: () => {
    return db.knex('user_locations')
  },
  getLocationById: (id) => {
    return db.knex('user_locations').where('id', id)
  },
  deleteLocation: (id) => {
    return db.knex('user_locations').where('id', id).del()
  },
  getLocationByAddress: (address) => {
    return db.knex('user_locations').where('formatted_address', address)
  },
  getLocationIdByAddress: (address) => {
    return db.knex('user_locations').where('formatted_address', address).select('id')
  }
}
