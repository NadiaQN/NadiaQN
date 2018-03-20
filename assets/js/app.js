$(document).ready(function() {
  $('.button-collapse').sideNav({
    closeOnClick: true
  });

  $('.btn-portfolio').click(function() {
    $('.info').hide();
    $('#portfolio').fadeIn(1000);
  });

  $('.btn-about').click(function() {
    $('.info').hide();
    $('#about-me').fadeIn(1000);
  });

  $('.btn-tools').click(function() {
    $('.info').hide();
    $('#tools').fadeIn(1000);
  });

  $('.btn-contact').click(function() {
    $('.info').hide();
    $('#contact-me').fadeIn(1000);
  });
});

