import { IntroManager } from "./IntroManager.js";
import { NavManager } from "./NavManager.js";

document.addEventListener("DOMContentLoaded", () => {
  // Inicializa o gerenciador da intro
  new IntroManager();
  new NavManager();

  // Futuramente, você inicializa outros aqui:
  // new FormHandler();
  // new MobileMenu();
});

const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  spaceBetween: 20,

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
