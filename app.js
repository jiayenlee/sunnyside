const navSlide = () => {
  const toggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.navMenu');

  toggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

}

navSlide();