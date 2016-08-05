var db = require('../../../config/db')
module.exports = {
  createUberTrip: (trip) => {
    return db.knex('user_uber_trips').insert({
      origin_loc_id: trip.origin_loc_id,
      destination_loc_id: trip.destination_loc_id,
      created_at: Date.now()
    }).returning("*")
  },
  updateUberTripById: (id, trip) => {    
    return db.knex('user_uber_trips').where('id', id)
      .update(trip).returning("*")
  },
}
