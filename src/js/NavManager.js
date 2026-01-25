export class NavManager {
  constructor() {
    this.nav = document.querySelector(".nav");
    this.button = document.querySelector(".nav__toggle");
    this.links = document.querySelectorAll(".nav__link");
    this.init();
  }

  init() {
    if (!this.nav || !this.button || !this.links.length) return;
    this.button.addEventListener("click", () => this.toggleMenu());
    this.itemClick();
  }

  toggleMenu() {
    this.nav.classList.toggle("nav--active");
    document.body.classList.toggle("no-scroll");
  }

  itemClick() {
    this.links.forEach((link) => {
      link.addEventListener("click", () => {
        this.nav.classList.remove("nav--active");
        document.body.classList.remove("no-scroll");
      });
    });
  }
}
