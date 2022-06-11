//Nav-icon handles
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

//Slider Handles
const imageSlides = document.querySelectorAll(".image-slide");
const textSlides = document.querySelectorAll(".text-slide");
const dots = document.querySelector(".dots");
const allDots = document.querySelectorAll(".dots__dot");

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

//Slider
// imageSlides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`))
// textSlides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`))

// [imageSlides, textSlides].forEach(
//   (s, i) => (s.style.transform = `translateX(${100 * i}%)`)
// );

[imageSlides, textSlides].forEach((e) => {
  e.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
});

let curSlide = 0;
const maxSlide = imageSlides.length;

const gotoSlide = function (slide) {
  // [imageSlides, textSlides].forEach((e) => {
  //   e.forEach(
  //     (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  //   );
  // });
  imageSlides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
  textSlides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

gotoSlide(0);

function activateDots(slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("dots__dot--active"));
  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active");
};

dots.addEventListener("click", (e) => {
  if (e.target.classList.contains("dots__dot")) {
    const { slide } = e.target.dataset;
    gotoSlide(slide);
  activateDots(slide);
  }
});

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  gotoSlide(curSlide);
  activateDots(curSlide)
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  gotoSlide(curSlide);
  activateDots(curSlide);
};

// btnRight.addEventListener("click", nextSlide);
//btnLeft.addEventListener('click', prevSlide)

//Dots
const createDots = function () {
  imageSlides.forEach((_, i) => {
    dots.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};

createDots();
activateDots(0);


