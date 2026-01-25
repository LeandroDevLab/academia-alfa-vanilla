export class IntroManager {
  constructor() {
    this.video = document.querySelector(".intro__video-background");
    this.fallback = document.querySelector(".intro__image-fallback");
    this.init();
  }

  init() {
    if (!this.video || !this.fallback) return;
    this.video.addEventListener("loadeddata", () => this.handleVideoLoad());
  }

  handleVideoLoad() {
    this.fallback.style.opacity = "0";
    this.video.style.opacity = "1";
    setTimeout(() => this.fallback.remove(), 1500);
  }
}
