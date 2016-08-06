var db = require('../../../config/db')

module.exports = {
  getAllLocaitons: () => {
    return db.knex('user_locations')
  },
  getLocationById: (id) => {
    return db.knex('user_locations').where('id', id)
  }
}