const sliderNextBtn = document.querySelector('.burgers__arrow_next');
const sliderPrevBtn = document.querySelector('.burgers__arrow_prev');
const slider = document.querySelector('.burgers__slider');
const slidesContainer = document.querySelector('.burgers__items');
const slidesList = document.getElementsByClassName('burgers__slide');

var currentSliderWidth = 0;
var currentSlide = 0;

const disabledArrowOpacity = 0.2;
const enabledArrowOpacity = 1;

var sliderInAnimation = false;

function adoptSlidersWidth() {
    let sliderStyle = getComputedStyle(slider);
    let sliderWidth = parseInt(sliderStyle.width);

    if (sliderWidth != currentSliderWidth) {
        currentSliderWidth = sliderWidth;
        for (let i = 0; i < slidesList.length; i++) {
            slidesList[i].style.width = sliderWidth + 'px';
        }

        slidesContainer.style = 'right: ' + currentSlide * currentSliderWidth + 'px';
    }
}

sliderNextBtn.addEventListener('click', function (event) {
    event.preventDefault();

    if (sliderInAnimation) {
        return;
    }

    let style = getComputedStyle(slidesContainer);
    let right = parseInt(style.right);
    let offset = right + currentSliderWidth;
    let availabelOffset = (slidesList.length - 1) * currentSliderWidth;

    if (offset <= availabelOffset) {
        currentSlide++;
        sliderPrevBtn.style.opacity = enabledArrowOpacity;
        animateSlideRight(right, offset);
    }

    if (offset == availabelOffset) {
        sliderNextBtn.style.opacity = disabledArrowOpacity;
    }

});

sliderPrevBtn.addEventListener('click', function (event) {
    event.preventDefault();

    if (sliderInAnimation) {
        return;
    }

    let style = getComputedStyle(slidesContainer);
    let right = parseInt(style.right);
    let offset = right - currentSliderWidth;

    if (offset >= 0) {
        currentSlide--;
        sliderNextBtn.style.opacity = enabledArrowOpacity;
        animateSlideRight(right, offset);
    }

    if (offset == 0) {
        sliderPrevBtn.style.opacity = disabledArrowOpacity;
    }

});

function animateSlideRight(from, to) {
    console.log('animate slide right from = ' + from + ' to = ' + to);
    
    let startTime = Date.now()
    let duration = 300;
    let offset = to - from;

    sliderInAnimation = true;

    requestAnimationFrame(update);

    function update() {

        let timePassed = Date.now() - startTime;

        if (timePassed > duration) {
            timePassed = duration;
        }
        
        let animValue = timePassed / duration;
        let rightValue = from + (offset * animValue);
        slidesContainer.style = 'right: ' + rightValue + 'px';
       
        if (timePassed < duration) {
            requestAnimationFrame(update);
        } else {
            sliderInAnimation = false;
        }
    }
}

window.addEventListener('resize', function () {
    adoptSlidersWidth();
})

// при первой загрузке скрипта сразу адаптируем ширину слайда
adoptSlidersWidth();

sliderPrevBtn.style.opacity = disabledArrowOpacity;