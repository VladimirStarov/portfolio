let parallax = document.querySelectorAll('.parallax');
let windowWidth = null;
(function getWindowWidth() {
  let get = () => (windowWidth = document.querySelector('body').clientWidth);

  get() && window.addEventListener('resize', () => get());
}());

function moveLayersDependsOnScroll(parallax) {
  const windowOffset = window.pageYOffset;
  const parallaxOffsetTop = parallax.parentElement.offsetTop;
  const parallaxOffsetBottom = parallaxOffsetTop + parallax.clientHeight;
  const scroll = windowOffset - parallaxOffsetTop;
  if (windowOffset >= parallaxOffsetTop && windowOffset <= parallaxOffsetBottom) {
    [...parallax.children].forEach(layer => {
      const divider = layer.dataset.speed;
      const strafe = scroll * divider / 10;

      layer.style.transform = `translateY(-${strafe}%)`;
    });
  }
}

if (windowWidth > 768) {
  window.addEventListener('scroll', () => {
      [...parallax].forEach(parallax => {
        moveLayersDependsOnScroll(parallax);
      });
  });
}


// const parallax = document.querySelector('.parallax');
// const layers = parallax.children;

// function moveLayersDependsOnScroll(wScroll) {

//     Array.from(layers).forEach(layer => {
//         const divider = layer.dataset.speed;
//         const strafe = wScroll * divider / 10;
        
//         layer.style.transform = `translateY(-${strafe}%)`;
//     });
// }


// window.addEventListener('scroll', e => {
//     const wScroll = window.pageYOffset;
//     moveLayersDependsOnScroll(wScroll);
// });