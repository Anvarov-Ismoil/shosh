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
  if (winWidth > 900) {
    mobile__menu.style.transform = 'translateX(-100%)'
    close.style.display = 'none'
    burger.style.display = 'block'
  }
})

const span_1 = document.querySelector('.numbers .span_1');
const targetValue_1 = parseInt(span_1.textContent);

const span_2 = document.querySelector('.numbers .span_2');
const targetValue_2 = parseInt(span_2.textContent);

const span_3 = document.querySelector('.numbers .span_3');
const targetValue_3 = parseInt(span_3.textContent);

let currentValue_1 = 0;
let currentValue_2 = 0;
let currentValue_3 = 0;

function updateValue_1() {
  if (currentValue_1 <= targetValue_1) {
    span_1.textContent = currentValue_1;
    currentValue_1++;
  }
}

function updateValue_2() {
  if (currentValue_2 <= targetValue_2) {
    span_2.textContent = currentValue_2;
    currentValue_2++;
  }
}

function updateValue_3() {
  if (currentValue_3 <= targetValue_3) {
    span_3.textContent = currentValue_3;
    currentValue_3++;
  }
}

const interval_1 = setInterval(updateValue_1, 20);
const interval_2 = setInterval(updateValue_2, 20);
const interval_3 = setInterval(updateValue_3, 20);