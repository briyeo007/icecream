document.addEventListener("DOMContentLoaded", () => {
  const btn  = document.querySelector("button.menu-toggle");
  const menu = document.querySelector("header .menu-container");
  if (!btn || !menu) return;
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    menu.classList.toggle("active");
    btn.setAttribute("aria-expanded", menu.classList.contains("active"));
  });
});
