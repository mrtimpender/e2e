$(document).ready(function(){

  var modalFire = document.getElementById('modal-fire');
  google.maps.event.addDomListener(modalFire, 'click', function () {
    console.log("autocomplete initialized!");
    var places = new google.maps.places.Autocomplete(document.getElementById('searchBoxField'));
    google.maps.event.addListener(places, 'place_changed', function () {
      var place = places.getPlace();
      var address = place.formatted_address;
    })
  });

})
