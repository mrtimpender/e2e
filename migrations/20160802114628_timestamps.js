
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('user_trips', function(table){
        table.increments('id').primary()
        table.integer('user_id').references('e2e_users.id')
        table.string('trans_mode')
        table.string('origin_formatted_address')
        table.float('origin_lat')
        table.float('origin_lng')
        table.integer('origin_loc_id').references('user_locations.id')
        table.string('destination_formatted_address')
        table.float('destination_lat')
        table.float('destination_lng')
        table.integer('destination_loc_id').references('user_locations.id')
        table.string('created_at')
        table.string('updated_at')
      }),
      knex.schema.createTable('e2e_users', function(table){
        table.increments('id').primary()
        table.string('e2e_username')
        table.string('e2e_password')
        table.string('e2e_email')
        table.string('uber_key', 1000)
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
        table.string('formatted_address')
        table.float('lat')
        table.float('lng')
        table.string('created_at')
        table.string('updated_at')
      })
  ])}


exports.down = function(knex, Promise) {

};
