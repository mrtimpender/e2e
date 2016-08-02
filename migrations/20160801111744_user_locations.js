
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_locations', function(table){
    table.increments('id').primary()
    table.integer('user_id').references('e2e_users.id')
    table.string('formatted_address')
    table.float('lat')
    table.float('lng')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user_locations')
};
