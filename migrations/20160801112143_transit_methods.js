
exports.up = function(knex, Promise) {
  return knex.schema.createTable('transit_methods', function(table){
    table.increments('id').primary()
    table.string('transit_type')
    table.boolean('preferred_method')
    table.integer('user_id').references('e2e_users.id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('transit_methods')
};
