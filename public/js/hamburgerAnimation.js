/* Show menu on hamburger button press */
const menuBtn = document.querySelector(".fancy-burger");
const hamburgerMenu = document.querySelector(".hamburger__anchors");
const hamburgerLinks = document.querySelectorAll(".hamburger-link");
const anchorContainer = document.querySelectorAll(".anchor__container");

export class HamburgerClass {
  constructor() {
    menuBtn.addEventListener("click", this._toggleHidden);
    hamburgerLinks.forEach((link) => {
      link.addEventListener("click", this._toggleHidden);
    });
  }

  _toggleHidden() {
    menuBtn
      .querySelectorAll("span")
      .forEach((span) => span.classList.toggle("open"));
    hamburgerMenu.style.display = "inline";
    hamburgerMenu.classList.toggle("unhide-menu");
  }
}
const app = new HamburgerClass();
