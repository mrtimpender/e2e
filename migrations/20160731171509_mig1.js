
exports.up = function(knex, Promise) {
  return knex.schema.createTable('e2e_users', function(table){
    table.increments()
    table.string('e2e_username')
    table.string('e2e_password')
  })  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('e2e_users')  
};
