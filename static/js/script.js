$(document).ready(function(){
  console.log('Document ready');

  $('#menu-btn').on('click', function(){
    $(this).toggleClass('open');
    $('#menu').toggleClass('flex hidden');
  });
});