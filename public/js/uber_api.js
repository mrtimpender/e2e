$('#getDirections').click(function(){

  var uberClientId = "pgWgaE_OESHvrToXlCce7faksY3DWYPQ"
  , uberServerToken = "2c_ptkzp8P0thrqbCOa0wT3cdQpX1Uvv-cn9ov-o";

  function getPriceEstimatesForUserLocation(latitude,longitude) {
    $.ajax({
      url: "https://api.uber.com/v1/estimates/price",
      headers: {
        Authorization: "Token " + uberServerToken
      },
      data: {
        start_latitude: 39.7642529,
        start_longitude: -105.00383399999998,
        end_latitude: 39.7577737,
        end_longitude: -105.00713239999999
      },
      success: function(result) {
        console.log(result);
      }
    });
  }

  function getTimeEstimatesForUserLocation(latitude,longitude) {
    $.ajax({
      url: "https://api.uber.com/v1/estimates/time",
      headers: {
        Authorization: "Token " + uberServerToken
      },
      data: {
        start_latitude: 39.7642529,
        start_longitude: -105.00383399999998,
        end_latitude: 39.7577737,
        end_longitude: -105.00713239999999
      },
      success: function(result) {
        console.log(result);
      }
    });
  }

  getTimeEstimatesForUserLocation(trip.origin_lat, trip.origin_lng);
  getPriceEstimatesForUserLocation(trip.origin_lat, trip.origin_lng);

})
