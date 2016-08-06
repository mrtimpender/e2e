$(function() {
      console.log($('.map-canvas'))
      var mapCards = $('.map-canvas')

      var createGoogleMap = (mapNode) => {
        // lat, lng logic
        var lat = parseFloat(mapNode.attr('data-lat'))
        var lng = parseFloat(mapNode.attr('data-lng'))
        console.log(lat, lng)
        var latlng = new google.maps.LatLng(lat, lng)
        // map settings
        var settings = {
            zoom: 10,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            scrollwheel: false,
            draggable: true,
            styles: [{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e0efef"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"hue":"#1900ff"},{"color":"#c0e8e8"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#7dcdcd"}]}],
            mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
            navigationControl: false,
            navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
        }
        // declare map
        var map = new google.maps.Map(document.getElementById(mapNode.attr('id')), settings)
        console.log(map)
        // resize map logic
        google.maps.event.addDomListener(window, "resize", function() {
            var center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
            $('#map-canvas').removeClass('loading');
        });

      }
      mapCards.each((i, mapNode) => createGoogleMap($(mapNode)))

})
