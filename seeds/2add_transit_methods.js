exports.seed = function(knex, Promise) {
  return knex('transit_methods').del()
    .then(function () {
      return Promise.all([
          knex('transit_methods').insert({
            id: 300,
            transit_type: 'DRIVING',
            preferred_method: true,
            user_id: 1
          }),
          knex('transit_methods').insert({
            id: 301,
            transit_type: 'WALKING',
            preferred_method: false,
            user_id: 1
          }),
          knex('transit_methods').insert({
            id: 302,
            transit_type: 'BICYLING',
            preferred_method: false,
            user_id: 1
          }),
          knex('transit_methods').insert({
            id: 303,
            transit_type: 'UBER',
            preferred_method: false,
            user_id: 1
          }),
          knex('transit_methods').insert({
            id: 304,
            transit_type: 'TRANSIT',
            preferred_method: false,
            user_id: 1
          })
      ]);
    });
};
