
exports.up = function(knex, Promise) {
  return knex.schema.createTable('e2e_users', function(table){
    table.increments('id').primary()
    table.string('firstname')
    table.string('lastname')
    table.string('e2e_username')
    table.string('e2e_password')
    table.string('uber_key', 1000)
    table.string('lyft_key', 1000)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('e2e_users')
};
