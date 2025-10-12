// main.js (모바일 + 768만)
document.addEventListener("DOMContentLoaded", () => {
  // 햄버거
  const btn = document.querySelector("button.menu-toggle");
  const menu = document.querySelector("header .menu-container");

  if (btn && menu) {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      menu.classList.toggle("active");
      btn.setAttribute("aria-expanded", menu.classList.contains("active"));
    });
  }

  // ✅ Commitment (768에서 2장, 간격 24, 중앙정렬 해제)
  new Swiper("#commitment .swiper", {
    slidesPerView: 1,
    centeredSlides: true,
    loop: false,
    spaceBetween: 16,
    pagination: {
      el: "#commitment .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: "#commitment .swiper-button-next",
      prevEl: "#commitment .swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        centeredSlides: false,
        spaceBetween: 24,
      },
    },
  });

  // Our Picks (모바일 1, 768에서 2)
  new Swiper("#picks .picks-swiper", {
    slidesPerView: 1,
    centeredSlides: true,
    loop: false,
    spaceBetween: 16,
    pagination: {
      el: "#picks .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: "#picks .swiper-button-next",
      prevEl: "#picks .swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        centeredSlides: false,
        spaceBetween: 32,
      },
    },
    observer: true,
    observeParents: true,
  });

  // Instagram (모바일 1, 768에서 2)
  new Swiper(".instagram-swiper", {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 16,
    centeredSlides: false, // ✅ 항상 해제
    navigation: {
      nextEl: "#instagram .swiper-button-next",
      prevEl: "#instagram .swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2, // ✅ 두 장 표시
        centeredSlides: false, // ✅ 중앙 정렬 해제
        spaceBetween: 24,
      },
    },
  });
});
