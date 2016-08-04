var db = require('../../../config/db')
module.exports = {
  createTrip: (trip) => {
    return db.knex('trip_directions').insert(trip).returning('*')
  },
  getAllTrips: () => {
    return db.knex('user_trips')
  },
  getTripById: (id) => {
    return db.knex('user_trips').where('id', id)
  }
}
