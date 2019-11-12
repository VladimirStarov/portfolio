(function (header) {
    function headerFixed() {
      const vScroll = window.pageYOffset;
      const scrolledValue = 21;
  
      if (vScroll >= scrolledValue) {
        header.classList.add('hero__header--fixed');
      } else if (vScroll <= 21) {
        header.classList.remove('hero__header--fixed');
      }
    }
  
    headerFixed();
    window.addEventListener('scroll', headerFixed);
  })(document.querySelector('.hero__header'));