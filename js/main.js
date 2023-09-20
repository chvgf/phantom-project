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
    direction: 'horizontal', // 수직 슬라이드
    loop: true, // 반복 재생 여부, 1 -> 2 -> 3 -> 4 -> 다시 1~
    autoplay: { //// 자동 재생 여부
      delay: 5000 // 5초마다 슬라이드 바뀜(기본값: 3000ms)
    },
    slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수(기본값: 1)
    spaceBetween: 10, // 슬라이드 사이 여백(간격)px
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    pagination: {
      el: '.content-2-1 .swiper-pagination', // 페이지 번호 요소 선택자
      clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
    }, //페이지 번호 사용
    navigation: { // 슬라이드 이전/다음 버튼 사용
      nextEl: '.content-2-1 .swiper-button-next', //다음 버튼 요소
      prevEl: '.content-2-1 .swiper-button-prev' // 이전 버튼 요소
    }
});

new Swiper('.content-2-2 .swiper', {
    direction: 'horizontal', // 수직 슬라이드
    loop: true, // 반복 재생 여부, 1 -> 2 -> 3 -> 4 -> 다시 1~
    autoplay: { //// 자동 재생 여부
      delay: 5000 // 5초마다 슬라이드 바뀜(기본값: 3000ms)
    },
    slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수(기본값: 1)
    spaceBetween: 10, // 슬라이드 사이 여백(간격)px
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    pagination: {
      el: '.content-2-2 .swiper-pagination', // 페이지 번호 요소 선택자
      clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
    }, //페이지 번호 사용
    navigation: { // 슬라이드 이전/다음 버튼 사용
      nextEl: '.content-2-2 .swiper-button-next', //다음 버튼 요소
      prevEl: '.content-2-2 .swiper-button-prev' // 이전 버튼 요소
    }
});
