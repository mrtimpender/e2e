var trip = {};
window.onload = function initMap() {

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11
  });
  var infoWindow = new google.maps.InfoWindow({map: map});
  // Try HTML5 geolocation.
  var trafficLayer = new google.maps.TrafficLayer();
  var transitLayer = new google.maps.TransitLayer();
  var bikeLayer = new google.maps.BicyclingLayer();
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };


      trafficLayer.setMap(null);
      transitLayer.setMap(null);
      bikeLayer.setMap(null);
      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');

      $('#showTraffic').click(function() {
        trafficLayer.getMap() == null ? trafficLayer.setMap(map) : trafficLayer.setMap(null);
      })

      $('#showTransit').click(function() {
        transitLayer.getMap() == null ? transitLayer.setMap(map) : transitLayer.setMap(null);
      })

      $('#showBike').click(function() {
        bikeLayer.getMap() == null ? bikeLayer.setMap(map) : bikeLayer.setMap(null);
      })

      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}

function initMap() {
  var directionsDisplay = new google.maps.DirectionsRenderer;
  var directionsService = new google.maps.DirectionsService;
  var trafficLayer = new google.maps.TrafficLayer();
  var transitLayer = new google.maps.TransitLayer();
  var bikeLayer = new google.maps.BicyclingLayer();
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
  });
  directionsDisplay.setMap(map);
  trafficLayer.setMap(null);
  transitLayer.setMap(null);
  bikeLayer.setMap(null);

  $('#showTraffic').click(function() {
    trafficLayer.getMap() == null ? trafficLayer.setMap(map) : trafficLayer.setMap(null);
  })

  $('#showTransit').click(function() {
    transitLayer.getMap() == null ? transitLayer.setMap(map) : transitLayer.setMap(null);
  })

  $('#showBike').click(function() {
    bikeLayer.getMap() == null ? bikeLayer.setMap(map) : bikeLayer.setMap(null);
  })

  calculateAndDisplayRoute(directionsService, directionsDisplay);
  document.getElementById('mode').addEventListener('change', function() {
    calculateAndDisplayRoute(directionsService, directionsDisplay);
  });
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  var startPoint = document.getElementById('start-point').value;
  var endPoint = document.getElementById('end-point').value;
  var selectedMode = document.getElementById('mode').value;
  directionsService.route({
    origin: startPoint,
    destination: endPoint,
    travelMode: google.maps.TravelMode[selectedMode]
  }, function(response, status) {
    if (status == 'OK') {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  })

  geocoder = new google.maps.Geocoder();
  geocoder.geocode({ 'address': startPoint }, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      trip['origin_formatted_address'] = results[0].formatted_address;
      trip['origin_lat'] = parseFloat(results[0].geometry.location.lat());
      trip['origin_lng'] = (parseFloat(results[0].geometry.location.lng()));
    }
  })

  geocoder = new google.maps.Geocoder();
  geocoder.geocode({ 'address': endPoint }, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      trip['destination_formatted_address'] = results[0].formatted_address;
      trip['destination_lat'] = parseFloat(results[0].geometry.location.lat());
      trip['destination_lng'] = parseFloat(results[0].geometry.location.lng());
    }
  })
}



$('#getDirections').click(function(){
  initMap();
})
