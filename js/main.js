document.addEventListener("DOMContentLoaded", () => {
  // 햄버거 메뉴
  const btn  = document.querySelector("button.menu-toggle");
  const menu = document.querySelector("header .menu-container");
  if (btn && menu) {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      menu.classList.toggle("active");
      btn.setAttribute("aria-expanded", menu.classList.contains("active"));
    });
  }

  // ✅ Commitment 스와이퍼 (모바일/데스크탑 모두 안정화)
  let commitSwiper = new Swiper('.commit-wrapper', {
    slidesPerView: 1,
    centeredSlides: true,
    loop: false,
    spaceBetween: 0,
    pagination: { 
      el: '#commitment .swiper-pagination', 
      clickable: true 
    },
    navigation: { 
      nextEl: '#commitment .swiper-button-next', 
      prevEl: '#commitment .swiper-button-prev' 
    },
    breakpoints: {
      769: { // 데스크탑 이상
        slidesPerView: 1,   // 한 장 유지
        allowTouchMove: false // 드래그 막기
      }
    }
  });
});

 new Swiper('.picks-swiper', {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  spaceBetween: 0,
  pagination: {
    el: '#picks .swiper-pagination',   // ✅ 꼭 있어야 함
    clickable: true
  },
  navigation: {
    nextEl: '#picks .swiper-button-next',
    prevEl: '#picks .swiper-button-prev'
  }
});
