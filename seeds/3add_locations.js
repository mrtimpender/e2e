exports.seed = function(knex, Promise) {
  return knex('user_locations').del()
    .then(function () {
      return Promise.all([
        knex('user_locations').insert({
          id: 500,
          user_id: 1,
          name: 'Home',
          formatted_address: '1327 Steele St, Denver, CO 80206, United States',
          lat: '39.7372481',
          lng: '-104.9498042'
        }),
        knex('user_locations').insert({
          id: 501,
          user_id: 1,
          name: 'Work',
          formatted_address: '1644 Platte Street, Denver, CO, United States',
          lat: '39.7577737',
          lng: '-105.0071324'
        }),
        knex('user_locations').insert({
          id: 502,
          user_id: 1,
          name: 'Doggie Daycare',
          formatted_address: '3645 Brighton Blvd, Denver, CO 80216, United States',
          lat: '39.7720972',
          lng: '-104.9770622'
        }),
        knex('user_locations').insert({
          id: 503,
          user_id: 1,
          name: 'CSU',
          formatted_address: 'CSU, Fort Collins, CO, United States',
          lat: '40.5747751',
          lng: '-105.0807072'
        }),
        knex('user_locations').insert({
          id: 504,
          user_id: 1,
          name: 'Mom and Dads',
          formatted_address: '2016 Oriole Avenue, Colorado Springs, CO, United States',
          lat: '38.861849',
          lng: '-104.791815'
        })
      ])
    });
};
