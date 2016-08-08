var db = require('../../../config/db')

var exportMethods = {
  getAllTripTimeEstimates: () => {
    return db.knex.raw(`select distinct 
        td.directions_duration_in_traffic_text, 
        td.directions_duration_in_traffic_val, 
        td.created_at, td.trip_id 
      from trip_directions td 
      order by td.trip_id `)
  },
  getPrimaryCommuteEstimates: () => {
    return db.knex.raw(`select ut.trip_name, 
	    ut.*
    from user_trips ut 
    join trip_directions td on td.trip_id = ut.id
    where ut.is_primary = true
    order by td.trip_id`)
  }

}
module.exports = exportMethods