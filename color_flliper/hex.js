const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button = document.getElementById("btn");
const color = document.querySelector(".color");

// add event listener to button when clicked
button.addEventListener('click', function (params) {
    let randomHexNumber = randomHexColorCode();
    color.innerHTML = randomHexNumber;
    document.body.style.backgroundColor = randomHexNumber;
})
// get random hex color
function randomHexColorCode(){
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };

