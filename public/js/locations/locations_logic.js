
$('.saved-location-card').click(function() {
  $('#card-address-title').html($(this).parent().find('span').html());
  $('#card-addressFocus').html($(this).parent().find('p').html())
  
})
