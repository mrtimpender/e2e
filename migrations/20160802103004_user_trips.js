
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_trips', function(table){
    table.increments('id').primary()
    table.integer('user_id').references('e2e_users.id')
    table.string('origin_destination')
    table.string('trans_mode')
    table.string('origin_formatted_address')
    table.float('origin_lat')
    table.float('origin_lng')
    table.integer('origin_loc_id').references('user_locations.id')
    table.string('destination_formatted_address')
    table.float('destination_lat')
    table.float('destination_lng')
    table.integer('destination_loc_id').references('user_locations.id')
  })
};

exports.down = function(knex, Promise) {

};
