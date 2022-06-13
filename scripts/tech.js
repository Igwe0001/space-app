//Nav-icon handles
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

//Number Button Handlers
const techImageSlides = document.querySelectorAll(".tech-image");
const techTextSlides = document.querySelectorAll(".tech-text");
const techNums = document.querySelector(".tech-nums");
const allNums = document.querySelectorAll(".tech-btn");

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

[techImageSlides, techTextSlides].forEach((e) => {
  e.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
});

let techCurSlide = 0;
const techMaxSlide = techImageSlides.length;

const gotoSlide = function (slide) {
  // [imageSlides, textSlides].forEach((e) => {
  //   e.forEach(
  //     (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  //   );
  // });
  techImageSlides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
  techTextSlides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

gotoSlide(0);

function activateDots(slide) {
  allNums.forEach((dot) => dot.classList.remove("tech-active"));
  document
    .querySelector(`.tech-btn[data-slide="${slide}"]`)
    .classList.add("tech-active");
}

techNums.addEventListener("click", (e) => {
  if (e.target.classList.contains("tech-btn")) {
    const { slide } = e.target.dataset;
    gotoSlide(slide);
    activateDots(slide);
  }
});

const nextSlide = function () {
  if (techCurSlide === techMaxSlide - 1) {
    techCurSlide = 0;
  } else {
    techCurSlide++;
  }
  gotoSlide(techCurSlide);
  activateDots(techCurSlide);
};

const prevSlide = function () {
  if (techCurSlide === 0) {
    techCurSlide = techMaxSlide - 1;
  } else {
    techCurSlide--;
  }
  gotoSlide(techCurSlide);
  activateDots(techCurSlide);
};



activateDots(0);
