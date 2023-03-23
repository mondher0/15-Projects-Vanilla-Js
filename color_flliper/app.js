const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const button = document.getElementById("btn");
const color = document.querySelector(".color");

// add event listener to button when clicked
button.addEventListener('click', function (params) {
    let randomNumber = getRandomNumber();
    color.innerHTML = colors[randomNumber];
    document.body.style.backgroundColor = colors[randomNumber];
})
//get randomp number between 0 - 3
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
