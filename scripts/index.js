const button = document.querySelector(".btn");
const ratingCard = document.querySelector(".rating-content");
const thankYou = document.querySelector(".thank-you");
const numbers = document.querySelectorAll(".rating-numbers span");
const rating = document.querySelector(".rating");
let selectedRating = 5;

const handleRating = (e) => {
  removeSelectedRatings();
  e.target.classList.add("rating-selected-value");
  selectedRating = e.target.innerText;
};

const removeSelectedRatings = () => {
  numbers.forEach((number) => number.classList.remove("rating-selected-value"));
};

button.addEventListener("click", (e) => {
  e.preventDefault();
  ratingCard.classList.add("hide-review");
  thankYou.classList.remove("hide-thank-you");
  rating.innerText = selectedRating;
});

numbers.forEach((number) => number.addEventListener("click", handleRating));
