exports.seed = function(knex, Promise) {
  return knex('user_trips').del()
    .then(function () {
      return Promise.all([
        knex('user_trips').insert({
          id: 500,
          user_id: 1,
          trip_name: 'Home to Galvanize',
          transit_method_id: 300,
          origin_formatted_address: '3358 Navajo St, Denver, CO 80211, USA',
          origin_lat: '39.7642529',
          origin_lng: '-105.00383399999998',
          origin_loc_id: 501,
          destination_formatted_address: '1644 Platte St, Denver, CO 80202, USA',
          destination_lat: '39.7577737',
          destination_lng: '-105.00713239999999',
          destination_loc_id: 500
        }),
        knex('user_trips').insert({
          id: 501,
          user_id: 1,
          trip_name: 'Breck PO to Galvanize',
          transit_method_id: 300,
          origin_formatted_address: '305 S Ridge St, Breckenridge, CO 80424',
          origin_loc_id: 502,
          destination_formatted_address: '1644 Platte St, Denver, CO 80202, USA',
          destination_lat: '39.7577737',
          destination_lng: '-105.00713239999999',
          destination_loc_id: 500
        }),
        knex('user_trips').insert({
          id: 503,
          user_id: 1,
          trip_name: 'Breck PO to Galvanize UBER',
          transit_method_id: 303,
          origin_formatted_address: '305 S Ridge St, Breckenridge, CO 80424',
          origin_loc_id: 502,
          destination_formatted_address: '1644 Platte St, Denver, CO 80202, USA',
          origin_lat: '39.4792145',
          origin_lng: '-106.0442308',
          destination_lat: '39.7577737',
          destination_lng: '-105.00713239999999',
          destination_loc_id: 500
        }),
        knex('user_trips').insert({
          id: 502,
          user_id: 1,
          trip_name: 'ABQ PO to Galvanize mode: Driving',
          transit_method_id: 300,
          origin_formatted_address: '2505 Graceland Dr NE, Albuquerque, NM 87110',
          origin_loc_id: 502,
          destination_formatted_address: '1644 Platte St, Denver, CO 80202, USA',
          destination_lat: '39.7577737',
          destination_lng: '-105.00713239999999',
          destination_loc_id: 500
        }),
      ]);
    });
};
