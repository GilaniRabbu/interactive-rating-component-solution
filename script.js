const RatingCard = document.querySelector('.rating-card');
const ThankState = document.querySelector('.success-msg');

const SubmitButton = document.querySelector('.submit-btn');
const ReturnButton = document.querySelector('.return-btn');

const SelectRate = document.querySelectorAll('.btn');
const AddRate = document.getElementById('add-rate');

// Store the currently selected rating button
let selectedButton = null;

SubmitButton.addEventListener('click', function () {
    ThankState.style.display = 'block';
    RatingCard.style.display = 'none';
});

ReturnButton.addEventListener('click', function () {
    ThankState.style.display = 'none';
    RatingCard.style.display = 'block';
});

for (let i = 0; i < SelectRate.length; i++) {
    SelectRate[i].addEventListener('click', function () {
        // Store the selected button for potential reset later
        selectedButton = this;

        // Update the rating display
        AddRate.innerHTML = this.innerHTML;
        // AddRate.innerHTML = SelectRate[i].innerHTML
    });
};