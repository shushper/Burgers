const hamburgerBtn = document.querySelector('#hamburger-btn');
const hiddenMenu = document.querySelector('#hidden-menu');
const closeBtn = document.querySelector('#hidden-menu-close-btn');
const links = document.getElementsByClassName('hidden-menu__nav-link');

hamburgerBtn.addEventListener('click', showHiddenMenu);

var menuShown = false;

function showHiddenMenu() {
    menuShown = true;

    hiddenMenu.style = 'display: flex';
}

function hideHiddenMenu() {
    menuShown = false;

    hiddenMenu.style = 'display: none';
}

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', hideHiddenMenu);
}

closeBtn.addEventListener('click', hideHiddenMenu);