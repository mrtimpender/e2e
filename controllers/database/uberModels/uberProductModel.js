var db = require('../../../config/db')
module.exports = {
  createLocationProduct: (products_object, location_id) => {
    return db.knex('uber_location_product_data').insert({
      location_id,
      products_object,
      created_at: Date.now() }).returning("*")
  },

}
