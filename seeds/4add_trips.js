exports.seed = function(knex, Promise) {
  return knex('user_trips').del()
    .then(function () {
      return Promise.all([
        knex('user_trips').insert({
          id: 200,
          user_id: 1,
          trip_name: 'Home to Work',
          transit_method_id: 300,
          origin_formatted_address: '1327 Steele St, Denver, CO 80206, United States',
          origin_lat: '39.7372481',
          origin_lng: '-104.9498042',
          origin_loc_id: 500,
          destination_formatted_address: '1644 Platte Street, Denver, CO, United States',
          destination_lat: '39.7577737',
          destination_lng: '-105.0071324',
          destination_loc_id: 501
        }),
        knex('user_trips').insert({
          id: 201,
          user_id: 1,
          trip_name: 'Cab to Work',
          transit_method_id: 303,
          origin_formatted_address: '1327 Steele St, Denver, CO 80206, United States',
          origin_lat: '39.7372481',
          origin_lng: '-104.9498042',
          origin_loc_id: 500,
          destination_formatted_address: '1644 Platte Street, Denver, CO, United States',
          destination_lat: '39.7577737',
          destination_lng: '-105.0071324',
          destination_loc_id: 501
        }),
        knex('user_trips').insert({
          id: 202,
          user_id: 1,
          trip_name: 'Cab Home from Work',
          transit_method_id: 303,
          origin_formatted_address: '1644 Platte Street, Denver, CO, United States',
          origin_lat: '39.7577737',
          origin_lng: '-105.0071324',
          origin_loc_id: 501,
          destination_formatted_address: '1327 Steele St, Denver, CO 80206, United States',
          destination_lat: '39.7372481',
          destination_lng: '-104.9498042',
          destination_loc_id: 500
        }),
        knex('user_trips').insert({
          id: 203,
          user_id: 1,
          trip_name: 'Bike to Doggie Daycare',
          transit_method_id: 302,
          origin_formatted_address: '1327 Steele St, Denver, CO 80206, United States',
          origin_lat: '39.7372481',
          origin_lng: '-104.9498042',
          origin_loc_id: 500,
          destination_formatted_address: '3645 Brighton Blvd, Denver, CO 80216, United States',
          destination_lat: '39.7720972',
          destination_lng: '-104.9770622',
          destination_loc_id: 502
        }),
        knex('user_trips').insert({
          id: 204,
          user_id: 1,
          trip_name: 'Cab to Doggie Daycare',
          transit_method_id: 303,
          origin_formatted_address: '1327 Steele St, Denver, CO 80206, United States',
          origin_lat: '39.7372481',
          origin_lng: '-104.9498042',
          origin_loc_id: 500,
          destination_formatted_address: '3645 Brighton Blvd, Denver, CO 80216, United States',
          destination_lat: '39.7720972',
          destination_lng: '-104.9770622',
          destination_loc_id: 502
        }),
        knex('user_trips').insert({
          id: 205,
          user_id: 1,
          trip_name: 'CSU',
          transit_method_id: 300,
          origin_formatted_address: '1327 Steele St, Denver, CO 80206, United States',
          origin_lat: '39.7372481',
          origin_lng: '-104.9498042',
          origin_loc_id: 500,
          destination_formatted_address: 'CSU, Fort Collins, CO, United States',
          destination_lat: '40.5747751',
          destination_lng: '-105.0807072',
          destination_loc_id: 503
        }),
        knex('user_trips').insert({
          id: 206,
          user_id: 1,
          trip_name: 'To Mom & Dads',
          transit_method_id: 300,
          origin_formatted_address: '1327 Steele St, Denver, CO 80206, United States',
          origin_lat: '39.7372481',
          origin_lng: '-104.9498042',
          origin_loc_id: 500,
          destination_formatted_address: '2016 Oriole Avenue, Colorado Springs, CO, United States',
          destination_lat: '38.861849',
          destination_lng: '-104.791815',
          destination_loc_id: 504
        })
      ]);
    });
};
