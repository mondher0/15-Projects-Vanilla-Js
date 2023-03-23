const increase = document.querySelector('#increase');
const decrease = document.querySelector('#decrease');
const reset = document.querySelector('#reset');
const counter = document.querySelector('#value');

// whene we click on increase button 
increase.addEventListener('click', () => increaseOrDecrease("increase"));

// whene we click on decrease button 
decrease.addEventListener('click', () => increaseOrDecrease("decrease"));

// whene we click on reset button
reset.addEventListener('click', () => increaseOrDecrease("reset"));

// increase or decrease or reset function
function increaseOrDecrease (chosen) {
    if(chosen == "increase") {
        //we will increase
        counter.innerHTML = parseInt(counter.innerHTML) + 1;
        if(parseInt(counter.innerHTML)> 0) {
            counter.style.color = "green";
        }else if (parseInt(counter.innerHTML) < 0) {
            counter.style.color = "red";
        }else {
            counter.style.color = "#102A42";
        }
    } else if(chosen == "decrease") {
        // we will decrease
        counter.innerHTML = parseInt(counter.innerHTML) - 1;
        if(parseInt(counter.innerHTML) > 0) {
            counter.style.color = "green";
        }else if (parseInt(counter.innerHTML) < 0) {
            counter.style.color = "red";
        }else {
            counter.style.color = "#102A42";
        }
    }else if (chosen == "reset") {
        //we will reset
        counter.innerHTML = 0;
        counter.style.color = "#102A42";
    }
}