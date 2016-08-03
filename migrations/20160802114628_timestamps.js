
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('user_trips', function(table){
        table.increments('id').primary()
        table.integer('user_id').references('e2e_users.id')
        table.string('trip_name')
        table.string('trans_mode')
        table.string('origin_formatted_address')
        table.string('origin_lat')
        table.string('origin_lng')
        table.integer('origin_loc_id')
        table.string('destination_formatted_address')
        table.string('destination_lat')
        table.string('destination_lng')
        table.integer('destination_loc_id')
        table.string('created_at')
        table.string('updated_at')
      }),
      knex.schema.createTable('e2e_users', function(table){
        table.increments('id').primary()
        table.string('e2e_username')
        table.string('e2e_password')
        table.string('e2e_firstname')
        table.string('e2e_lastname')
        table.string('e2e_email')
        table.string('e2e_uber_picture_url')
        table.string('uber_key', 1000)
        table.string('uber_access_token', 1000)
        table.string('uber_refresh_token', 1000)
        table.string('uber_rider_id', 1000)
        table.string('uber_uuid', 1000)
        table.string('lyft_key', 1000)
        table.string('created_at')
        table.string('updated_at')
      }),
      knex.schema.createTable('transit_methods', function(table){
        table.increments('id').primary()
        table.string('transit_type')
        table.boolean('preferred_method')
        table.integer('user_id').references('e2e_users.id')
        table.string('created_at')
        table.string('updated_at')
      }),
      knex.schema.createTable('user_locations', function(table){
        table.increments('id').primary()
        table.integer('user_id').references('e2e_users.id')
        table.string('name')
        table.string('formatted_address')
        table.string('lat')
        table.string('lng')
        table.string('created_at')
        table.string('updated_at')
      })
  ])}


exports.down = function(knex, Promise) {

};
