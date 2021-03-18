$('.slider').slick({
  arrows:false,
  fade: true,
  autoplay:3000,
  dots: true,
});
const btn=document.querySelector('.btn');
const menu=document.querySelector('.menu');

btn.addEventListener('click', ()=>{
  btn.classList.toggle('btn-close');
  menu.classList.toggle('menu-active');
});