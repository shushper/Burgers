const menuAcco = document.querySelector(".menu__accordeon");
const menuTriggers = menuAcco.getElementsByClassName("menu__trigger");

for (let i = 0; i < menuTriggers.length; i++) {
    menuTriggers[i].addEventListener('click', function(event) {
        event.preventDefault();

        let menuItem = this.parentElement;

        if (window.innerWidth > 480) {
            toggleMenuItem(menuItem);
        } else {
            showMenuOverlay(menuItem);
        }
    })    
}

function toggleMenuItem(menuItem) {
   
    let menuContent = menuItem.querySelector('.menu__content')
    let menuContentText = menuContent.querySelector('.menu__content-text')

    if (isMenuItemActive(menuItem)) {
        menuItem.classList.remove('menu__item_active');
        menuContent.style.width = 0;
    } else {
        let activeItem = menuAcco.querySelector('.menu__item_active');
        if (activeItem != null) {
            activeItem.classList.remove('menu__item_active');
            activeItem.querySelector('.menu__content').style.width = 0;
        }

        menuItem.classList.add('menu__item_active');
        let menuContentWidth = computeMenuContentWidth() + "px";
        menuContent.style.width = menuContentWidth;
        menuContentText.style.width = menuContentWidth;
    }
}

function isMenuItemActive(teamItem) {
    return teamItem.classList.contains('menu__item_active');
}

function computeMenuContentWidth() {
    let screenWidth = window.innerWidth;
    let menuTriggersWidth = 0;

    for (let i = 0; i < menuTriggers.length; i++) {
        let trigger = menuTriggers[i];
        menuTriggersWidth += trigger.clientWidth;
    }

    let availableWidth = screenWidth - menuTriggersWidth;
    return Math.min(540, availableWidth);
}

function showMenuOverlay(menuItem) {
    let overlay = document.querySelector('.menu__overlay');
    let trigger = overlay.querySelector('.menu__overlay-trigger'); 
    let triggerText = overlay.querySelector('.menu__overlay-trigger-text'); 
    let contentText =  overlay.querySelector('.menu__overlay-content-text'); 
    let closeBtn = overlay.querySelector('.menu__overlay-close-btn');

    trigger.style.backgroundImage = menuItem.querySelector('.menu__trigger').style.backgroundImage;
    triggerText.textContent = menuItem.querySelector('.menu__trigger-text').textContent;
    contentText.textContent = menuItem.querySelector('.menu__content-text').textContent;

    overlay.style.display = 'flex';

    closeBtn.addEventListener('click', function(event) {
        event.preventDefault();
        closeOverlay();
    });

    window.addEventListener('resize', onResize);

    function onResize() {
        if (window.innerWidth > 480) {
            closeOverlay();
        }
    }

    function closeOverlay() {
        overlay.style.display = 'none';
        window.removeEventListener('resize', onResize);
    }
}

