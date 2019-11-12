const burgerBtn = document.querySelector('.hamburger');
const popupBtn = document.querySelector('.popup__btn');
const popup = document.querySelector('.popup');
const sidebar = document.querySelector('.popup__sidebar');
const body = document.querySelector('body');

burgerBtn.addEventListener('click', function (e) {
    sidebar.style.right = 0;
    popup.style.right = 0;
    popup.style.opacity = 1;
    body.style.overflow = 'hidden';

});

popupBtn.addEventListener('click', function (e) {
    sidebar.style.right = 100 + 'vw';
    popup.style.right = -100 + 'vw';
    popup.style.opacity = 0;
    body.style.overflow = 'scroll';
});
