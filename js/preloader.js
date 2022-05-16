const preload = document.querySelector('.preload');
preload.classList.add('show-preloader');
window.addEventListener('load', () => {
  preload.classList.remove('show-preloader');
});
