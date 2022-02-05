/* eslint-disable wrap-iife */
/* eslint-disable func-names */
(function () {
  function trackScroll() {
    const scrolled = window.pageYOffset;
    const goTopBtn = document.querySelector('.back-to-top') as Element;
    const coords = document.documentElement.clientHeight;
    if (scrolled > coords) {
      goTopBtn.classList.add('back-to-top-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('back-to-top-show');
    }
  }
  window.addEventListener('scroll', trackScroll);
})();
document.querySelectorAll('.menu').forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
  });
});
const menuBtn = document.querySelector('.menu') as Element;
const menu = document.querySelector('.header-nav') as Element;
menuBtn.addEventListener('click', () => (
  menu.classList.toggle('is-open')
));
