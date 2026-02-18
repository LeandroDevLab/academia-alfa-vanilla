import { IntroManager } from "./IntroManager.js";
import { NavManager } from "./NavManager.js";

// =================== QUANDO A PÁGINA INICIAR ====================
document.addEventListener("DOMContentLoaded", () => {
  // Inicializa o gerenciador da intro
  new IntroManager();
  new NavManager();

  renderSuplementos();
  initSwiper();
  initAnimations();
  focusWeekDay();
  initFaq();
  // Futuramente, você inicializa outros aqui:
  // new FormHandler();
  // new MobileMenu();
});

/* ========= Galeria Swiper ========== */
function initSwiper() {
  new Swiper(".swiper", {
    initialSlide: 1, // Começa no segundo slide
    slidesPerView: 1.3, //quantos slides por vez cabem na tela

    centeredSlides: true, //centralizando slide atual

    loop: true,

    // CONFIGURAÇÃO DO AUTOPLAY
    autoplay: {
      delay: 3000, // Tempo em milissegundos (3 segundos)
      disableOnInteraction: false, // Continua rodando mesmo se o usuário clicar/arrastar
      pauseOnMouseEnter: true, // Pausa o carrossel quando o mouse estiver em cima
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    spaceBetween: 20,

    breakpoints: {
      768: {
        slidesPerView: 2.2,
      },
      1024: {
        slidesPerView: 3.5,
      },
    },
  });
}

// ========== Observer para iniciar só quando aparecer na tela ==========
function initAnimations() {
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
}

//  ========== DATA DINÂMICA ==========

function focusWeekDay() {
  const weekDay = document.querySelectorAll("[data-day]");
  const today = new Date();

  weekDay.forEach((item) => {
    if (item.dataset.day == today.getDay()) {
      item.classList.toggle("gym-today");
      const itemContent = item.innerHTML;
      item.innerHTML = `HOJE <i class="fa-solid fa-arrow-right"></i> ${itemContent}`;
    }
  });
}

/* ============================================================================= */
/* ================= Preenchimento dinâmico dos suplementos ==================== */
/* ============================================================================= */
const suplementos = [
  {
    title: "Creatina Growth 250g",
    subtitle: "com menor preço",
    lastPrice: 120,
    newPrice: 80,
    imgSrc: "creatina.png",
  },
  {
    title: "Whey Protein 1000g",
    subtitle: "com menor preço",
    lastPrice: 150,
    newPrice: 110,
    imgSrc: "whey.png",
  },
  {
    title: "Growth Protein Bar 65g",
    subtitle: "lanche ideal para você",
    lastPrice: 19,
    newPrice: 9.9,
    imgSrc: "whey-barra.png",
  },
  {
    title: "Growth Whey Protein 30g",
    subtitle: "Dose de whey, prove os sabores",
    lastPrice: 12,
    newPrice: 9.9,
    imgSrc: "whey-dose.png",
  },
];

// ========== RENDERIZAR SUPLEMENTOS ==========
function renderSuplementos() {
  const gridSuplementos = document.querySelector(".swiper-wrapper");

  function transformCurrency(value) {
    const moeda = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
    return moeda;
  }

  let conteudo = "";

  suplementos.forEach((item) => {
    conteudo += `
  <div class="swiper-slide">
              <img src="./src/assets/images/bg-img-suplemento2.png" alt="Imagem de uma creatina" />
              <div class="swiper-slide-content">
                <h3 class="swiper_title">${item.title}</h3>
                <p class="swiper_description">${item.subtitle}</p>
                <div class="de-por">
                  <p>de: <span class="de">${transformCurrency(item.lastPrice)}</span></p>
                  <p class="por">por apenas</p>
                  <p class="preco">${transformCurrency(item.newPrice)}</p>
                </div>
                <img src="./src/assets/images/suplementos/${item.imgSrc}" class="suplemento-img" />
              </div>
  </div>
`;
  });

  gridSuplementos.innerHTML = conteudo + conteudo;
}

/* ========== FAQ ACORDEÃO ========== */
function initFaq() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", function () {
      const isActive = item.classList.contains("active");
      faqItems.forEach((otherItem) => otherItem.classList.remove("active"));
      if (!isActive) item.classList.add("active");
    });
  });
}
