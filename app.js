
const decreaseButton = document.querySelector("#decrease");
const number = document.querySelector("#number");
const increaseButton = document.querySelector("#increase");

let count = 0;

increaseButton.addEventListener("click", function() {
    count++;
    number.textContent = count;
});

decreaseButton.addEventListener("click", function() {
    count--;
    number.textContent = count;
});
