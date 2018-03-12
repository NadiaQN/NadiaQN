$(document).ready(function() {
  $('.button-collapse').sideNav({
    closeOnClick: true
  });
  $('ul.tabs').tabs('select_tab', 'tab_id');

  $('.btn-portfolio').click(function() {
    $('.info').hide();
    $('#portfolio').show();
  });

  $('.btn-about').click(function() {
    $('.info').hide();
    $('#about-me').show();
  });

  $('.btn-tools').click(function() {
    $('.info').hide();
    $('#tools').show();
  });

  $('.btn-contact').click(function() {
    $('.info').hide();
    $('#contact-me').show();
  });
});

