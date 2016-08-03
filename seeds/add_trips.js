exports.seed = function(knex, Promise) {
  return knex('user_trips').del()
    .then(function () {
      return Promise.all([
        knex('user_trips').insert({
          id: 500,
          user_id: 1,
          trip_name: 'Home to Galvanize',
          trans_mode: 'DRIVING',
          origin_formatted_address: '3358 Navajo St, Denver, CO 80211, USA',
          origin_lat: '39.7642529',
          origin_lng: '-105.00383399999998',
          origin_loc_id: 501,
          destination_formatted_address: '1644 Platte St, Denver, CO 80202, USA',
          destination_lat: '39.7577737',
          destination_lng: '-105.00713239999999',
          destination_loc_id: 500
        })
      ]);
    });
};
