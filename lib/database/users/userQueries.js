var db = require('../../../config/db')
var ModelBase = require('bookshelf-modelbase')(db.bookshelf);


module.exports = {
  getUserByUuid : (uuid) => {
    return db.knex('e2e_users').where('uber_uuid', uuid)
  },
  createUser: (user) => {
    return db.knex('e2e_users').insert(user)
  },
  getAllUsers: () => {
    return db.knex('e2e_users')
  }
}