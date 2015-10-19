$(function() {
  $('a[href*=#about]').click(function() {
       $('html,body').animate({
          scrollTop: $('#about').offset().top}, 1000);
      })
  $('a[href*=#tools]').click(function() {
       $('html,body').animate({
          scrollTop: $('#tools').offset().top}, 1000);
      })
  $('a[href*=#blog]').click(function() {
       $('html,body').animate({
          scrollTop: $('#blog').offset().top}, 1000);
      })
  $('a[href*=#home]').click(function() {
       $('html,body').animate({
          scrollTop: $('#home').offset().top}, 1000);
      })
});
