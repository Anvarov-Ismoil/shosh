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

window.addEventListener('scroll', () => {
  let winHeight = pageYOffset
  if (winHeight > 700) {
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

document.querySelectorAll(".minus").forEach(function (minusButton) {
  minusButton.addEventListener("click", function () {
    var input = this.parentElement.querySelector("input");

    let inputValue = parseInt(input.value);
    if (isNaN(inputValue)) {
      inputValue = 0;
    }

    var count = inputValue - 1;
    count = count < 0 ? 0 : count;
    input.value = count;
    input.dispatchEvent(new Event("change"));
    return false;
  });
});

document.querySelectorAll(".plus").forEach(function (plusButton) {
  plusButton.addEventListener("click", function () {
    var input = this.parentElement.querySelector("input");

    let inputValue = parseInt(input.value);
    if (isNaN(inputValue)) {
      inputValue = 0;
    }

    if (inputValue >= 15) {
      return;
    } else {
      inputValue++;
    }

    input.value = inputValue;
    input.dispatchEvent(new Event("change"));
    return false;
  });
});


function formatPhoneNumber(value) {
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]/g, '');
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 9) return phoneNumber;
  if (phoneNumberLength < 6) {
    return ` (${phoneNumber.slice(0, 2)}) ${phoneNumber.slice (2)}`;
  }
  return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 5)}-${phoneNumber.slice(5, 9)}`;
}

function phoneNumberFormatter() {
  const inputField = document.querySelector('.number');
  const formattedInputValue = formatPhoneNumber(inputField.value);
  inputField.value = formattedInputValue;
}

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    document.querySelector('#scroll-top').classList.add('active')
  } else {
    document.querySelector('#scroll-top').classList.remove('active')
  }
  menu.classList.remove('active')
  burger.classList.remove('active')
})

const modal = document.querySelector('.modal')
const modalX = document.querySelector('.modal .close')
const body = document.body

const newsCard = document.querySelectorAll('.news .card .btn').forEach(card => {
  card.addEventListener('click', () => {
    modal.classList.add('active')
    body.style.overflow = 'hidden'
  })
})

modalX.addEventListener('click', () => {
  modal.classList.remove('active')
  body.style.overflow = 'auto'
})