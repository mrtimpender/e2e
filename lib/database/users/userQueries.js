var knex = require('../../../config/db')

module.exports = {
  createUser: (user) => {
    return knex('e2e_users').insert(user)
  },
  getAllUsers: () => {
    return knex('e2e_users')
  }
}