const menu = document.querySelector(".menu");

menu.addEventListener("click", (e) => {
  window.scrollTo(0, 0);
  menu.closest(".header__container").classList.toggle("active");
  document.body.classList.toggle("lock");
})

const footerTitles = document.querySelectorAll(".footer__title");

footerTitles.forEach(title => {
  title.addEventListener("click", (e) => {
    e.target.closest(".footer__title").nextElementSibling.classList.toggle("active");
  })
});