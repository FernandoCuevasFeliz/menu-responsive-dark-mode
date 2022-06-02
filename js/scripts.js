const imgLogo = document.getElementById('img-logo');
const favicon = document.getElementById('favicon');
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const menuDropdown = document.querySelectorAll('.menu__dropdown');
const theme = document.getElementById('theme');

const search = document.getElementById('search');
const searchControl = document.getElementById('search-control');
const searchBtn = document.getElementById('search-btn');
const searchBtnLeft = document.getElementById('search-btn-left');
const searchBtnClear = document.getElementById('search-btn-clear');

const darkMode = localStorage.getItem('theme');
const body = document.getElementById('body');

if (localStorage.getItem('theme')) {
  body.classList.add('dark-mode');
  theme.classList.add('theme--dark');
  imgLogo.src = './img/logo-dark.png';
  favicon.href = './img/favicon-dark.png';
} else {
  localStorage.setItem('theme', '');
  theme.classList.remove('theme--dark');

  imgLogo.src = './img/logo.png';
  favicon.href = './img/favicon.png';
}

theme.addEventListener('click', () => {
  if (localStorage.getItem('theme') === 'dark-mode') {
    localStorage.setItem('theme', '');
    body.classList.remove('dark-mode');
    theme.classList.remove('theme--dark');
    imgLogo.src = './img/logo.png';
    favicon.href = './img/favicon.png';
  } else {
    localStorage.setItem('theme', 'dark-mode');
    body.classList.add('dark-mode');
    theme.classList.add('theme--dark');
    imgLogo.src = './img/logo-dark.png';
    favicon.href = './img/favicon-dark.png';
  }
});

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('menu-btn--active');
  menu.classList.toggle('menu--active');

  if (menu.classList.contains('menu--active')) {
    menuDropdown.forEach((element) => {
      element.classList.remove('menu__dropdown--active');
    });
  }
});

menu.addEventListener('click', (e) => {
  const el = e.target;
  const parentNode = e.target.parentNode;
  if (
    parentNode?.classList.contains('menu__dropdown') ||
    parentNode.parentNode?.classList.contains('menu__dropdown')
  ) {
    parentNode
      .querySelector('.dropdown-btn')
      ?.classList.toggle('dropdown-btn--active');

    parentNode?.classList.contains('menu__dropdown') &&
      parentNode?.classList.toggle('menu__dropdown--active');

    parentNode.parentNode?.classList.contains('menu__dropdown') &&
      parentNode.parentNode?.classList.toggle('menu__dropdown--active');
  }
});

searchControl.addEventListener('keyup', () => {
  searchControl.value.length > 0
    ? searchControl.parentNode.classList.add('search--clear')
    : search.classList.remove('search--clear');
});

searchBtnClear.addEventListener('click', () => {
  searchControl.value = '';
  searchControl.focus();
  searchControl.parentNode.classList.remove('search--clear');
});

searchBtn.addEventListener('click', () => {
  search.classList.toggle('search--active');
});

searchBtnLeft.addEventListener('click', () => {
  search.classList.remove('search--active');
});

window.addEventListener('click', (e) => {
  const el = e.target;

  if (
    el.id != 'menu-btn' &&
    el.id != 'search-btn' &&
    el.id != 'menu' &&
    el.id != 'search' &&
    el.id != 'search-control' &&
    el.id != 'search-btn-search' &&
    el.id != 'search-btn-clear' &&
    el.id != 'theme' &&
    el.id != 'search-btn-left' &&
    !el.classList.contains('bar') &&
    !el.classList.contains('nav') &&
    !el.classList.contains('header') &&
    !el.classList.contains('theme__moon') &&
    !el.classList.contains('theme__sun') &&
    !el.parentNode?.classList.contains('menu__dropdown') &&
    !el.parentNode.parentNode?.classList.contains('menu__dropdown')
  ) {
    search.classList.remove('search--active');
    menuBtn.classList.remove('menu-btn--active');
    menu.classList.remove('menu--active');

    menuDropdown.forEach((element) => {
      element.classList.remove('menu__dropdown--active');
    });
  }
});
