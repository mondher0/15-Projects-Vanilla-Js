import { reviews } from "./data.js";
const nextButton = document.querySelector(".next-btn");
const prevButton = document.querySelector(".prev-btn");
const author = document.querySelector("#author");
const job = document.querySelector("#job");
const info = document.querySelector("#info");
const randomButton = querySelector(".random-btn");
let img  = document.getElementById("person-img");
let imgUrl = img.getAttribute("src");
console.log(imgUrl);

let nextIndex = 0;

// when we click on next button 
nextButton.addEventListener('click', () => {
    showPerson(nextIndex);
    nextIndex == reviews.length - 1 ? nextIndex = 0 : nextIndex++;        
    });

// when we click on prev button 
prevButton.addEventListener('click', () => {
    nextIndex == 0 ? nextIndex = reviews.length - 1 : nextIndex--; 
    showPerson(nextIndex);
});

// when we click on random button
randomButton.addEventListener('click', () => {
    nextIndex = Math.floor(Math.random() * 3);
    showPerson(nextIndex)
});


// show person when we click
function showPerson(index) {
    author.innerHTML = reviews[index].name;
    job.innerHTML = reviews[index].job;
    info.innerHTML = reviews[index].info;
    imgUrl = reviews[index].img;
    img.setAttribute("src", imgUrl);  
    }

