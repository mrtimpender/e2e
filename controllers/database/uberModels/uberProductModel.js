var db = require('../../../config/db')
module.exports = {
  createLocationProduct: (products_object, location_id) => {
    return db.knex('uber_location_product_data').insert({
      location_id,
      products_object,
      created_at: Date.now() }).returning("*")
  },
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
