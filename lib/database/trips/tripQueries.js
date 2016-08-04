var db = require('../../../config/db')

module.exports = {
  createTrip: (trip) => {
    return db.knex('trip_directions').insert(trip)
  }

}
