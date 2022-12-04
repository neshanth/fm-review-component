const button = document.querySelector(".btn");
const ratingCard = document.querySelector(".rating-content");
const thankYou = document.querySelector(".thank-you");
const numbers = document.querySelectorAll(".rating-numbers span");
const rating = document.querySelector(".rating-final");
const form = document.querySelector("form");
let selectedRating = 5;

const handleRating = (e) => {
  removeSelectedRatings();
  e.target.classList.add("rating-selected-value");
  selectedRating = e.target.innerText;
};

const removeSelectedRatings = () => {
  numbers.forEach((number) => number.classList.remove("rating-selected-value"));
};

// button.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log(e);
//   ratingCard.classList.add("hide-review");
//   thankYou.classList.remove("hide-thank-you");
//   rating.innerText = selectedRating;
// });

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let checkedInput = document.querySelector('input[name="rating"]:checked');
  if (checkedInput) {
    selectedRating = checkedInput.value;
    ratingCard.classList.add("hide-review");
    thankYou.classList.remove("hide-thank-you");
    rating.innerText = selectedRating;
  } else {
    alert("Please choose a rating");
    return;
  }
});

numbers.forEach((number) => number.addEventListener("click", handleRating));
