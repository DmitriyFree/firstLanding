$('.slider').slick({
  arrows:false,
  fade: true,
  autoplay:3000,
  dots: true,
});
$('.header-top__btn').on('click', function(){
  $('.menu').addClass('active');
});
$('.close-btn').on('click', function(){
  $('.menu').removeClass('active');
});