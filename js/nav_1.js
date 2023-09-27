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

// 타이핑 라이브러리
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 65,
});

typewriter
  .pauseFor(1200)
  .typeString('CREATIVE')
  .pauseFor(600)
  .deleteAll('88')
  .pauseFor(1200)
  .typeString('IDENTITY')
  .pauseFor(600)
  .deleteAll('88')
  .start();

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

// TOP Fixed 
gsap.to('.floating1', 1.5, {
  delay: 0.5,
  y: 13, 
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInOut 
});

// 반응형 햄버거
const hamEl = document.querySelector('.nav-ham');

hamEl.addEventListener('click', function () {
  const activeHamEl = hamEl.classList.contains('ham-active');
  if (activeHamEl) {
    hamEl.classList.remove('ham-active');
  } else {
    hamEl.classList.add('ham-active');
  }
});
hamEl.addEventListener('click', function () {
  
})
