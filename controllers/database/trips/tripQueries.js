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
  },
  getTripTransitMethod: (mode) => {
    return db.knex('transit_methods').select('id').where('transit_type', mode)
  },
  getTripTransitDetails: (id) => {
    return db.knex('transit_methods').select('transit_type').where('id', id)
  },
  getTripsAndLocations: () => {
    return db.knex.raw(`select * from user_trips`)
  },
  deleteTrip: (id) => {
    return db.knex('user_trips').where('id', id).del()
  }


}
