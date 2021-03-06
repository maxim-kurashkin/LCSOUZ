window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger'),
    linkpromo = document.querySelectorAll('.menu__link__close');
  
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger__active');
        menu.classList.toggle('menu__active');
    });
  
    linkpromo.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('hamburger__active');
            menu.classList.remove('menu__active');
        });
    });
});

