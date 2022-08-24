const feedbackButtonsContainer = document.getElementById('feedback-buttons');
const submitButton = document.getElementById('submit');
const selectedRatingElement = document.getElementById('selected-rating');
const ratingCard = document.querySelector('.rating-card');
const thankYouCard = document.querySelector('.thank-you-card');

let currentRating = null;

feedbackButtonsContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('btn-circle')) {
    currentRating = event.target.dataset.rating;

    const feedbackButtons = [...feedbackButtonsContainer.children];
    feedbackButtons.forEach((button) => {
      button.classList.remove('active');
    });

    event.target.classList.add('active');
  }
});

submitButton.addEventListener('click', () => {
  if (currentRating) {
    selectedRatingElement.textContent = currentRating;
    ratingCard.classList.add('hide');
    thankYouCard.classList.remove('hide');
  }
});
