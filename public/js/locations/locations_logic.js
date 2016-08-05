//
// $(".saved-location-card").hover(function(){
//     $(this).css("background-color", "#673AB7");
// });

$('.saved-location-card').click(function() {
  $('#card-address-title').html($(this).parent().find('span').html());
  $('#card-addressFocus').html($(this).parent().find('p').html());
})

  // $('#details').html($(this).parent().find('p').html());
