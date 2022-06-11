//Nav-icon handles
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

//Tab Handles
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabContent = document.querySelectorAll(".tab-content");
const tabImage = document.querySelectorAll(".page-image");



//Nav-icon 
let toggle = true;

hamburger.addEventListener("click", () => {
  nav.classList.toggle("show-nav");
  if (toggle == true) {
    hamburger.src = "/assets/shared/icon-close.svg";
  } else {
    hamburger.src = "/assets/shared/icon-hamburger.svg";
  }
  toggle = !toggle;
});


//Tab
tabsContainer.addEventListener("click", (e) => {
  const clicked = e.target.closest(".operations__tab");

  if (!clicked) return;

  tabs.forEach((t) => t.classList.remove("tab-active"));
    tabContent.forEach((c) => c.classList.remove("tab-active"));
    tabImage.forEach(e => e.classList.remove('tab-active'))

  clicked.classList.add("tab-active");

  document
    .querySelector(`.tab-content-${clicked.dataset.tab}`)
    .classList.add("tab-active");

  document
    .querySelector(`.page-image-${clicked.dataset.tab}`)
    .classList.add("tab-active");
});


