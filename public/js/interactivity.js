$(document).ready(function(){

  $('.modal-trigger').leanModal();


  google.maps.event.addDomListener(window, 'load', function () {
    var places = new google.maps.places.Autocomplete(document.getElementById('searchBoxField'));
    places.className = 'ui-front';
    google.maps.event.addListener(places, 'place_changed', function () {
      var place = places.getPlace();
      var address = place.formatted_address;
    })
  });

})
