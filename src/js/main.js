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

/* Galeria Swiper */
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

/*  */
// Observer para iniciar só quando aparecer na tela
const animationObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const el = entry.target;

      el.classList.add("animated");

      // para de observar depois de animar
      observer.unobserve(el);
    });
  },
  {
    threshold: 0.4,
  },
);

document.querySelectorAll("[data-animate]").forEach((el) => animationObserver.observe(el));

/* Fortalecendo a base
[] Pegar data atual Date.now()
[] Verificar qual o dia da semana
[] Manipular a DOM de acordo com a resposta anterior
[] 
*/
