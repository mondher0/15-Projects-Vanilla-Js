let preloader = document.querySelector(".preloader");
let video = document.querySelector(".video-container");

//when the page is loaded, the preloader will be hidden
window.addEventListener("load", () => {
    preloader.classList.add("hide-preloader");
    });

// when the switch button is clicked 
const switchBtn = document.querySelector(".switch-btn");
switchBtn.addEventListener("click", () => {
    if (!switchBtn.classList.contains("slide")) {
        switchBtn.classList.add("slide");
        video.pause();
    } else {
        switchBtn.classList.remove("slide");
        video.play();
    }
});
    
