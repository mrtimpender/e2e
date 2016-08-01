
exports.up = function(knex, Promise) {
  return knex.schema.createTable('transit_methods', function(table){
    table.increments('id').primary()
    table.string('transit_type')
    table.boolean('preferred_method')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('transit_methods')
};
