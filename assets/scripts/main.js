const toggleMenuBtn = document.getElementById('main-menu-toggle');
const closeMenuBtn = document.getElementById('main-menu-close');
const navItems = document.querySelectorAll('#main-menu .nav-item');
const menu = document.getElementById('main-menu');

toggleMenuBtn.addEventListener('click', (e) => {
  menu.setAttribute('aria-expanded', true);
  e.preventDefault();
});

closeMenuBtn.addEventListener('click', (e) => {
  menu.setAttribute('aria-expanded', false);
  e.preventDefault();
});

navItems.forEach((navItem) =>
  navItem.addEventListener('click', (e) => {
    menu.setAttribute('aria-expanded', false);
  })
);
