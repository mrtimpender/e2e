exports.seed = function(knex, Promise) {
  return Promise.all([
        knex('e2e_users').insert({
          id: 100,
          e2e_username: 'mb123',
          e2e_password: '123',
          e2e_firstname: 'Mary',
          e2e_lastname: 'Brown',
          e2e_email: 'mb123@gmail.com'
          })
      ]);
};
