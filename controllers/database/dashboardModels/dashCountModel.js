var db = require('../../../config/db')
module.exports = {
  getApiCountsByUserId: (id) => {
    return db.knex.raw(`SELECT 'user_location_count' AS table_name, COUNT(*) FROM user_locations where user_locations.user_id = ${id}
      UNION
      SELECT 'user_trips_count' AS table_name, COUNT(*) FROM user_trips where user_trips.user_id = ${id}
      UNION
      SELECT 'uber_api_count' AS table_name, COUNT(*) FROM uber_location_product_data join user_locations on uber_location_product_data.location_id = user_locations.id where user_locations.user_id = ${id}
      UNION
      SELECT 'google_api_count' AS table_name, COUNT(*) FROM trip_directions join user_trips on trip_directions.trip_id = user_trips.id where user_trips.user_id = ${id}
      `)
  }
}