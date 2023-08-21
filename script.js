const RatingCard = document.querySelector('.rating-card');
const ThankState = document.querySelector('.success-msg');

const SubmitButton = document.querySelector('.submit-btn');

const SelectRate = document.querySelectorAll('.btn');
const AddRate = document.getElementById('add-rate');

SubmitButton.addEventListener('click', function () {
    ThankState.style.display = 'block';
    RatingCard.style.display = 'none';
});

for (let i = 0; i < SelectRate.length; i++) {
    SelectRate[i].addEventListener('click', function () {
        AddRate.innerHTML = SelectRate[i].innerHTML
    });
};