var db = require('../../../config/db')

var exportMethods = {
  getAllTripTimeEstimates: () => {
    return db.knex.raw(`select distinct 
        td.directions_duration_in_traffic_text, 
        td.directions_duration_in_traffic_val, 
        td.created_at, td.trip_id 
      from trip_directions td 
      order by td.trip_id `)
  }

}
module.exports = exportMethods