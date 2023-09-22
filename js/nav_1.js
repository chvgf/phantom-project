// 타이핑 라이브러리
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 65,
});

typewriter
  .pauseFor(2000)
  .typeString('CREATIVE')
  .deleteAll('177')
  .pauseFor(2000)
  .typeString('IDENTITY')
  .deleteAll('177')
  .start();