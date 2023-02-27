const menu = document.querySelector(".menu");

menu.addEventListener("click", (e) => {
  window.scrollTo(0, 0);
  menu.closest(".header__container").classList.toggle("active");
  document.body.classList.toggle("lock");
})

// ========

const footerTitles = document.querySelectorAll(".footer__title");

footerTitles.forEach(title => {
  title.addEventListener("click", (e) => {
    e.target.closest(".footer__title").nextElementSibling.classList.toggle("active");
  })
});

// ========

const qualityImg = document.querySelector(".quality__img");
const slide = document.querySelector(".slider__slide");
const arrows = document.querySelectorAll(".slider__arrow");

const imagesPaths = [
  "assets/img/photo_banner_1.jpg",
  "assets/img/photo_banner_2.jpg",
  "assets/img/photo_banner_3.jpg",
  "assets/img/photo_banner_4.jpg",
  "assets/img/photo_banner_5.jpg",
];

let currentImgIndex = 0;

arrows.forEach(arrow => {
  arrow.addEventListener("click", (e) => {
    if (e.target.classList.contains("slider__left-arrow") &&
        currentImgIndex !== 0) {
      qualityImg.src = imagesPaths[--currentImgIndex];
    }
    if (e.target.classList.contains("slider__right-arrow") &&
        currentImgIndex !== imagesPaths.length - 1) {
      qualityImg.src = imagesPaths[++currentImgIndex];
    }

    slide.textContent = ("0" + (currentImgIndex + 1)).slice(-2);
  })
})

qualityImg.src = imagesPaths[currentImgIndex];

// ========