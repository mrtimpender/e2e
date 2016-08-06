  //
  // function initMap() {
  //   var directionsDisplay = new google.maps.DirectionsRenderer;
  //   var directionsService = new google.maps.DirectionsService;
  //   var map = new google.maps.Map(document.getElementById('jon_map'), {
  //     zoom: 7,
  //     center: {lat: 41.85, lng: -87.65}
  //   });
  //   directionsDisplay.setMap(map);
  //   directionsDisplay.setPanel(document.getElementById('showDirections'));
  //
  //   var control = document.getElementById('floating-panel');
  //   control.style.display = 'block';
  //   map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);
  //
  //   var onChangeHandler = function() {
  //     calculateAndDisplayRoute(directionsService, directionsDisplay);
  //   };
  //   document.getElementById('start').addEventListener('change', onChangeHandler);
  //   document.getElementById('end').addEventListener('change', onChangeHandler);
  // };
  //
  // function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  //   var start = document.getElementById('start').value;
  //   var end = document.getElementById('end').value;
  //   directionsService.route({
  //     origin: start,
  //     destination: end,
  //     travelMode: 'DRIVING'
  //   }, function(response, status) {
  //     console.log(response);
  //     if (status === 'OK') {
  //       directionsDisplay.setDirections(response);
  //     } else {
  //       window.alert('Directions request failed due to ' + status);
  //     }
  //   })
  // }


// autocomplete for new locations form

    window.onload = function() {
      var places = new
      google.maps.places.Autocomplete(document.getElementById('searchBoxField'));
      places.className = 'ui-front';
    };



  // function updateDismissable() {
  //   $('.lean-overlay').on('click',function() {
  //       $('.lean-overlay').remove();
  //       $('#modal-share-login').closeModal({
  //         dismissible: true,
  //         complete: function() {
  //           $('.lean-overlay').remove()
  //       }
  //     });
  //   })
  // };
