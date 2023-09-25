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