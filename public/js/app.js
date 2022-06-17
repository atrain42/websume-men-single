// Display a loaded while the entire page content loads
const loader = document.querySelector(".loader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

// Call loader animation function
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

// Class setup for the steps feature
class StepsFunction {
  constructor() {
    tabsContainer.addEventListener("click", this._stepsScroll);
  }

  _stepsScroll(e) {
    const clicked = e.target.closest(".operations__tab");

    // Guard clause
    if (!clicked) return;

    // Remove active classes
    tabs.forEach((t) => t.classList.remove("operations__tab--active"));
    tabsContent.forEach((c) =>
      c.classList.remove("operations__content--active")
    );

    // Activate tab
    clicked.classList.add("operations__tab--active");

    // Activate content area
    document
      .querySelector(`.operations__content--${clicked.dataset.tab}`)
      .classList.add("operations__content--active");
  }
}

const app = new StepsFunction();

const elementAppear = document.querySelector('[data-id="element-appear"]');
const zoom = document.querySelectorAll(".zoom");

const scaler = document.querySelectorAll('[data-id="scale-animation"]');
const scale = document.querySelectorAll(".scale");

/* Intersection observer on text only */
const headerObserver = new IntersectionObserver(
  function (entries, headerObserver) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      if (entry.isIntersecting) {
        if (elementAppear) {
          entry.target.classList.add("appear");
        }

        if (scaler) {
          entry.target.classList.add("show");
        }
        headerObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.5,
  }
);

scale.forEach((el) => {
  headerObserver.observe(el);
});

zoom.forEach((el) => {
  headerObserver.observe(el);
});

//Hamburger button
const menuBtn = document.querySelector(".fancy-burger");
const hamburgerMenu = document.querySelector(".hamburger__anchors");
const hamburgerLinks = document.querySelectorAll(".hamburger-link");

function toggleHidden() {
  hamburgerMenu.style.display = "inline";
  hamburgerMenu.classList.toggle("unhide-menu");
  menuBtn
    .querySelectorAll("span")
    .forEach((span) => span.classList.toggle("open"));
}

menuBtn.addEventListener("click", function () {
  toggleHidden();
});

hamburgerLinks.forEach((link) => {
  link.addEventListener("click", function () {
    toggleHidden();
  });
});
