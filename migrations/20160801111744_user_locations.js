
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_locations', function(table){
    table.increments('id').primary()
    table.integer('user_id').references('e2e_users.id')
    table.string('street_address')
    table.string('city')
    table.string('state')
    table.integer('zip_code')
    table.string('start_end')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user_locations')
};
