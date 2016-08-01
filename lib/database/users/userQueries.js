var db = require('../../../config/db')
var ModelBase = require('bookshelf-modelbase')(db.bookshelf);


module.exports = {
  createUser: (user) => {
    return db.knex('e2e_users').insert(user)
  },
  getAllUsers: () => {
    return db.knex('e2e_users')
  }
}