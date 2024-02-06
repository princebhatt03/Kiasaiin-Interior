const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true,
});

const hamburger = document.querySelector('.hamMenu');
const navMenu = document.querySelector('#navbar ul');

hamburger.addEventListener('click', mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
}
const navLink = document.querySelectorAll('#navbar a');

navLink.forEach(n => n.addEventListener('click', closeMenu));

function closeMenu() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}

var swiper = new Swiper('.mySwiper', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
let slideIndex = 0;
showSlides();
function showSlides() {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  let dots = document.getElementsByClassName('dot');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
let btn = document.querySelector('.open-button');
let on = document.querySelector('#myForm');
let flag = 0;
btn.addEventListener('click', function () {
  if (flag == 0) {
    flag = 1;
    on.style.display = 'block';
    btn.textContent = 'Close Form';
  } else {
    on.style.display = 'none';
    flag = 0;
    btn.textContent = 'Open Form';
  }
});
var tl = gsap.timeline();

tl.from('h1 ', {
  y: -30,
  duration: 0.5,
  delay: 0.3,
  stagger: 0.3,
  opacity: 0,
});
tl.from('h2 ', {
  y: -30,
  duration: 0.5,
  delay: 0.3,
  stagger: 0.3,
  opacity: 0,
});
tl.from('h3', {
  y: -30,
  duration: 0.5,
  delay: 0.3,
  stagger: 0.3,
  opacity: 0,
});
tl.from('.sidebarlogoss img', {
  y: -30,
  duration: 0.5,
  delay: 0.5,
  stagger: 0.5,
  opacity: 0,
});

const myNum = document.querySelectorAll('.count');
let speed = 1000;

myNum.forEach(myCount => {
  let target_count = myCount.dataset.count;
  let init_count = +myCount.innerText;
  let new_increment_num = Math.floor(target_count / speed);

  const updateNumber = () => {
    init_count += new_increment_num;
    myCount.innerText = init_count;

    if (init_count < target_count) {
      setTimeout(() => {
        updateNumber();
      }, 5);
    }
  };
  updateNumber();
});
