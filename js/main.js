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
const promotionEl = document.querySelector('section.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
const promotionToggleIcon = promotionToggleBtn.querySelector('.material-icons');

// 토글 버튼을 클릭했을 때 아래 기능을 실행
// 프로모션 요소에 'hide'라는 클래스 값이 있으면 보임 처리!('hide' 클래스를 제거하고 아이콘 모양을 'upload'로 설정)
//그렇지 않으면 숨김 처리!('hide' 클래스를 추가하고 아이콘 모양을 'download'로 설정)
// promotionToggleIcon.addEventListener('click', function () {
//   promotionEl.classList.contains('hide'); 
//   if (promotionEl.classList.contains('hide')) {
//     promotionEl.classList.remove('hide');    
//   } else {
//     promotionEl.classList.add('hide');
//   }
// });

promotionToggleIcon.addEventListener('click', function () {
  let hasHide = promotionEl.classList.contains('hide');
  if (hasHide) {
    promotionEl.classList.remove('hide');
    promotionToggleIcon.textContent = 'upload'
  } else {
    promotionEl.classList.add('hide');
    promotionToggleIcon.textContent = 'download'
  }
});