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
