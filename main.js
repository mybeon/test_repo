const mobileBtn = document.querySelector('.fa-bars')
const nav = document.querySelector('.nav_menu')
const closeIcon = document.querySelector('.fa-times-circle')
const html = document.querySelector('html')

mobileBtn.addEventListener('click', () => {
  nav.classList.toggle('active')
  mobileBtn.classList.toggle('close')
  closeIcon.classList.toggle('close_btn')
  html.classList.toggle('overflow')
})



const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    autoplay :{
      delay: 6000,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.btn-right',
      prevEl: '.btn-left',
    },
  });


