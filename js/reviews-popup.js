const reviewsDetailsBtns = document.getElementsByClassName('reviews__details');
const reviewsPopup = document.querySelector('#reviews-popup');
const reviewsPopupTitle = reviewsPopup.querySelector('.reviews-popup__title');
const reviewsPopupText = reviewsPopup.querySelector('.reviews-popup__text');
const reviewsPopupCloseBtn = reviewsPopup.querySelector('.reviews-popup__close-btn');

for (let i = 0; i < reviewsDetailsBtns.length; i++) {
    reviewsDetailsBtns[i].addEventListener('click', function(event){
        event.preventDefault();

        let reviewsContent = this.parentElement;

        showReviewsPopup(reviewsContent);
    });
}

function showReviewsPopup(reviewsContent) {
    let reviewsTite = reviewsContent.querySelector('.reviews__title');
    let reviewsText = reviewsContent.querySelector('.reviews__text');

    reviewsPopupTitle.textContent = reviewsTite.textContent;
    reviewsPopupText.textContent = reviewsText.textContent;

    reviewsPopup.style = 'display: flex';
}

function hideReviewsPopup() {
    reviewsPopup.style = 'display: none';
}

reviewsPopupCloseBtn.addEventListener('click', function(event) {
    event.preventDefault();
    hideReviewsPopup();
})