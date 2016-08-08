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
    return
    db.knex('transit_methods').select('tranist_type').where('id', id)
  },
  getTripsAndLocations: () => {
    return db.knex.raw(`select t.*, l.name as origin_name, l2.name as destination_name from user_trips t
                    join user_locations l on t.origin_loc_id = l.id
                    join user_locations l2 on t.destination_loc_id = l2.id`)
  },
  deleteTrip: (id) => {
    return db.knex('user_trips').where('id', id).del()
  }

}
