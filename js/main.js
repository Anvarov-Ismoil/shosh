const burger = document.querySelector('.burger .fa-bars-staggered')
const close = document.querySelector('.burger .fa-times')
const mobile__menu = document.querySelector('.header .mobile__menu')

burger.addEventListener('click', () => {
  mobile__menu.style.transform = 'translateX(0)'
  close.style.display = 'block'
  burger.style.display = 'none'
})

close.addEventListener('click', () => {
  mobile__menu.style.transform = 'translateX(-100%)'
  close.style.display = 'none'
  burger.style.display = 'block'
})

window.addEventListener('resize', () => {
  let winWidth = window.innerWidth
  if(winWidth > 900) {
    mobile__menu.style.transform = 'translateX(-100%)'
    close.style.display = 'none'
    burger.style.display = 'block'
  }
})
