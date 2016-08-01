
exports.up = function(knex, Promise) {
  return knex.schema.createTable('e2e_users', function(table){
    table.increments('id').primary()
    table.string('e2e_username')
    table.string('e2e_password')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('e2e_users')
};
