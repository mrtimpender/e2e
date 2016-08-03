exports.seed = function(knex, Promise) {
  return knex('user_locations').del()
    .then(function () {
      return Promise.all([
        knex('user_locations').insert({
          id: 500,
          user_id: 1,
          name: 'Galvanize',
          formatted_address: '1644 Platte St, Denver, CO 80202, USA',
          lat: '39.7577737',
          lng: '-105.00713239999999',
        }),
        knex('user_locations').insert({
          id: 501,
          user_id: 1,
          name: 'Home'
          formatted_address: '3358 Navajo St, Denver, CO 80211, USA',
          lat: '39.7642529',
          lng: '-105.00383399999998',
        })
      ]);
    });
};
