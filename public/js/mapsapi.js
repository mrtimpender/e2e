var trip = {};

function thisInitMap() {
  console.log('in init map');

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
  console.log('about to run calc and display');

  calculateAndDisplayRoute(directionsService, directionsDisplay);
  document.getElementById('mode').addEventListener('change', function() {
    calculateAndDisplayRoute(directionsService, directionsDisplay);
  });
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  var startPoint = document.getElementById('pac-input').innerHTML;
  var endPoint = document.getElementById('pac-input2').innerHTML;
  console.log(startPoint, endPoint);

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
      trip['origin_lng'] = parseFloat(results[0].geometry.location.lng());
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
  console.log('clicked');
  thisInitMap();
  console.log(trip);
})
