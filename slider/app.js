let nextBtn = document.querySelector(".nextBtn");
let prevBtn = document.querySelector(".prevBtn");
let slides = document.querySelectorAll(".slide");

let counter = 0;

// when next button is clicked
nextBtn.addEventListener("click", () => {
    counter -= 100;
    slides.forEach((slide) => {
        slide.style.transform = `translateX(${counter}%)`;
    })
    // we are at the last slide we want to disable the next button
    if (counter == -300) {
        nextBtn.classList.add("active");
    }
    // we are not at the first slide we want to enable the prev button
    if (counter != 0) {
        prevBtn.classList.remove("active");
    }
})

// when prev button is clicked
prevBtn.addEventListener("click", () => {
    counter += 100;
    slides.forEach((slide) => {
        slide.style.transform = `translateX(${counter}%)`;
    })
    // we are not at the last slide we want to enable the next button
    if (counter > -300) {
        nextBtn.classList.remove("active");
    }
    // we are at the first slide we want to disable the prev button
    if (counter > -100) {
        prevBtn.classList.add("active");
    }
})
