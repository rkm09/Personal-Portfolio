$('.navbar2').hide();
$(document).ready(function () {
  $('.open2').on('click', function () {
    $('.open2').hide();
    $('.close2').show();
    $('.navbar2').show();
  });
  $('.close2').on('click', function () {
    $('.navbar2').hide();
    $('.open2').show();
    $('.close2').hide();
  });
});