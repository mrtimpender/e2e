$('#origin-location-dropdown').change(function() {
  var watchedVal = $(this).val();
  watchedVal != 'saved-location' ? $('#origin-input').hide() : $('#origin-input').show();
})

$('#origin-location-dropdown').change(function() {
  var watchedVal = $(this).val();
  watchedVal != 'saved-location' ? $('#input-custom-origin').show() : $('#input-custom-origin').hide();
})

$('#input-custom-origin').click(function() {
  $('#origin-input').show();
})

$('#destination-location-dropdown').change(function() {
  var watchedVal = $(this).val();
  watchedVal != 'saved-location' ? $('#destination-input').hide() : $('#destination-input').show();
})

$('#destination-location-dropdown').change(function() {
  var watchedVal = $(this).val();
  watchedVal != 'saved-location' ? $('#input-custom-destination').show() : $('#input-custom-destination').hide();
})

$('#input-custom-destination').click(function() {
  $('#destination-input').show();
  $('#destination-location-dropdown').val();
})
