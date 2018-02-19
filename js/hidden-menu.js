const hamburgerBtn = document.querySelector('#hamburger-btn');
const hiddenMenu = document.querySelector('#hidden-menu');
const closeBtn = document.querySelector('#hidden-menu-close-btn');
const links = document.getElementsByClassName('hidden-menu__nav-link');


function showHiddenMenu() {
    hiddenMenu.style = 'display: flex';

    window.addEventListener("resize", onWindowResize);
}

function hideHiddenMenu() {
    hiddenMenu.style = 'display: none';

    window.removeEventListener("resize", onWindowResize);
}

function onWindowResize() {
    
    //Если пользователь растянет экран по ширине больше порогового значения для планшета - скрываем меню
    if (window.innerWidth > 768) {
        hideHiddenMenu()
    }
}

//По клику на гамбургер-иконку показываем меню
hamburgerBtn.addEventListener('click', showHiddenMenu);

//По клику на любой пункт меню закрываем меню
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', hideHiddenMenu);
}

//По клику на кнопку закрыть закрываем меню
closeBtn.addEventListener('click', hideHiddenMenu);

