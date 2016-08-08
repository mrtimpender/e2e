var db = require('../../../config/db')
var ModelBase = require('bookshelf-modelbase')(db.bookshelf);
var bcrypt = require('bcrypt')
module.exports = {
  getUserByUuid : (uuid) => {
    return db.knex('e2e_users').where('uber_uuid', uuid)
  },
  createUser: (user) => {
    return db.knex('e2e_users').insert(user)
  },
  getAllUsers: () => {
    return db.knex('e2e_users')
  },
  additionalLoginInfo: (uuid, newUserInfo) => {
    return db.knex('e2e_users')
      .where('uber_uuid', uuid)
      .update({
        e2e_password: bcrypt.hashSync(newUserInfo.e2e_password, 10),
        e2e_username: newUserInfo.e2e_username
    })
  },
  userLoginCheck: (user) => {
    return db.knex('e2e_users').where(user)
  },
  updateUserByUuid: (uuid, newData) => {
    return db.knex('e2e_users').where('uber_uuid', uuid).update(newData)
  },
  addUserLocation: (sesh, location, coords) => {
    return db.knex('user_locations')
    .insert({
      user_id: sesh.id,
      name: location.location_name,
      formatted_address: location.address,
      lat: coords.lat,
      lng: coords.lng
    })
  },
  editUserLocation: (sesh, location, coords, id) => {
    return db.knex('user_locations')
    .where('id', id)
    .update({
      name: location.location_name,
      formatted_address: location.address,
      lat: coords.lat,
      lng: coords.lng
    })
  },
  allLocations: (sesh) => {
    return db.knex.raw(`SELECT * from user_locations WHERE user_id=${sesh.id}`);
  },
  addUserTrip: (sesh, mode, tripDetails, locationIds, startAddress, endAddress, latLongStart, latLongEnd) => {
    return db.knex('user_trips')
    .insert({
      user_id: sesh.id,
      trip_name: tripDetails.trip_name,
      transit_method_id: mode,
      origin_formatted_address: startAddress,
      origin_lat: latLongStart.lat,
      origin_lng: latLongStart.lng,
      origin_loc_id: locationIds.startId,
      destination_formatted_address: endAddress,
      destination_lat: latLongEnd.lat,
      destination_lng: latLongEnd.lng,
      destination_loc_id: locationIds.endId
    })
  },
  editUserTrip: (id, transit, tripDetails, startAddress, endAddress, latLongStart, latLongEnd) => {
    return db.knex('user_trips')
    .where('id', id)
    .update({
      trip_name: tripDetails.trip_name,
      transit_method_id: transit,
      origin_formatted_address: startAddress,
      origin_lat: latLongStart.lat,
      origin_lng: latLongStart.lng,
      origin_loc_id: 3345,
      destination_formatted_address: endAddress,
      destination_lat: latLongEnd.lat,
      destination_lng: latLongEnd.lng,
      destination_loc_id: 3267
    })
  }
};
