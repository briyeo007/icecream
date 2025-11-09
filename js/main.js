// main.js (모바일 + 768만)
document.addEventListener("DOMContentLoaded", () => {
  const btn  = document.querySelector("button.menu-toggle");
  const menu = document.querySelector("header .menu-container");
  const nav  = menu?.querySelector("nav");

  if (btn && menu && nav) {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const isActive = menu.classList.toggle("active");
      btn.setAttribute("aria-expanded", isActive);

      if (isActive) {
        // 👉 오른쪽에서 부드럽게 열림
        nav.animate(
          [{ transform: "translateX(100%)" }, { transform: "translateX(0)" }],
          { duration: 400, easing: "cubic-bezier(0.25, 1, 0.5, 1)", fill: "forwards" }
        );
      } else {
        // 👈 오른쪽으로 부드럽게 닫힘
        nav.animate(
          [{ transform: "translateX(0)" }, { transform: "translateX(100%)" }],
          { duration: 400, easing: "cubic-bezier(0.25, 1, 0.5, 1)", fill: "forwards" }
        );
        document.body.style.overflow = "";
      }
    });

    // ✅ 메뉴 안 링크 클릭 시 닫힘
    nav.addEventListener("click", (e) => {
      const link = e.target.closest("a");
      if (link) {
        menu.classList.remove("active");
        btn.setAttribute("aria-expanded", "false");
        nav.animate(
          [{ transform: "translateX(0)" }, { transform: "translateX(100%)" }],
          { duration: 400, easing: "cubic-bezier(0.25, 1, 0.5, 1)", fill: "forwards" }
        );
        document.body.style.overflow = "";
      }
    });
  }

  // ✅ 아래는 스와이퍼 (기존 그대로)
  new Swiper("#commitment .swiper", {
    slidesPerView: 1,
    centeredSlides: true,
    loop: false,
    spaceBetween: 16,
    pagination: { el: "#commitment .swiper-pagination", clickable: true },
    navigation: {
      nextEl: "#commitment .swiper-button-next",
      prevEl: "#commitment .swiper-button-prev",
    },
  });

new Swiper("#picks .picks-swiper", {
  slidesPerView: 1,
  loop: false,
  spaceBetween: 16,
  centeredSlides: false,

  // ✅ 한 화면에 다 보여도 점 강제 유지
  watchOverflow: false,
  allowTouchMove: true,

  navigation: {
    nextEl: "#picks .swiper-button-next",
    prevEl: "#picks .swiper-button-prev",
  },
  pagination: {
    el: "#picks .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 17,
    },
    1600: {
      slidesPerView: 4,
      spaceBetween: 24,
    }
  },
});



  new Swiper(".instagram-swiper", {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 16,
    centeredSlides: false,
     watchOverflow: false,
  allowTouchMove: true,

    navigation: {
      nextEl: "#instagram .swiper-button-next",
      prevEl: "#instagram .swiper-button-prev",
    },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: { 
      slidesPerView: 3, 
      spaceBetween: 24 
    },
    1600: {
      slidesPerView: 4,
      spaceBetween: 24,
    }
  },
});
});
