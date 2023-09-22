// 헤더 스크롤 시 백그라운드 컬러 번경
const hEl = document.querySelector('header');

window.addEventListener('scroll', function () {

console.log(window.scrollY);

if (window.scrollY > 100) {
    hEl.classList.add('header-bg')
} else {
    hEl.classList.remove('header-bg')
}
});

// CONTENT-1 애니메이션
const conBoxEl = document.querySelectorAll('.content .box')

window.addEventListener('scroll', function () {

    // console.log(window.scrollY);
    conBoxEl.forEach(function (conBoxEl, index) {
        

    if (window.scrollY > 500) {
        conBoxEl.classList.add('show')
    } else {
        conBoxEl.classList.remove('show')
    }
    })});

// CONTENT-2 수평 슬라이드 기능
new Swiper('.content-2-1 .swiper', {
    direction: 'horizontal', 
    loop: true, 
    autoplay: { 
      delay: 5000 
    },
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    pagination: {
      el: '.content-2-1 .swiper-pagination',
      clickable: true 
    },
    navigation: {
      nextEl: '.content-2-1 .swiper-button-next', 
      prevEl: '.content-2-1 .swiper-button-prev' 
    }
});
new Swiper('.content-2-2 .swiper', {
    direction: 'horizontal', 
    loop: true,
    autoplay: { 
      delay: 5000 
    },
    slidesPerView: 3, 
    spaceBetween: 10, 
    centeredSlides: true, 
    pagination: {
      el: '.content-2-2 .swiper-pagination', 
      clickable: true 
    }, 
    navigation: { 
      nextEl: '.content-2-2 .swiper-button-next', 
      prevEl: '.content-2-2 .swiper-button-prev' 
    }
});

// NEWS 수평 슬라이드 3개
new Swiper('.news .swiper', {
  direction: 'horizontal', 
  loop: true, 
  autoplay: { 
    delay: 2500 
  },
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
});


// 문의 Fixed
const fixedBtn = document.querySelector('div.side-fixed');
const fixedEl = document.querySelector('form.fixed-form');
const closeBtn = document.querySelector('.close-btn')

fixedBtn.addEventListener('click', function () {
  const activeEl = fixedEl.classList.contains('fixed-active');
  if (activeEl) {
    fixedEl.classList.remove('fixed-active');
  } else {
    fixedEl.classList.add('fixed-active');
  }
});

fixedBtn.addEventListener('click', function () {
  const activeBtnEl = fixedBtn.classList.contains('fixedBtn-active');
  if (activeBtnEl) {
    fixedBtn.classList.remove('fixedBtn-active');
  } else {
    fixedBtn.classList.add('fixedBtn-active');
  }
});

closeBtn.addEventListener('click', function () {
  fixedBtn.classList.remove('fixedBtn-active');
  fixedEl.classList.remove('fixed-active');
})