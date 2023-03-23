navToglle = document.querySelector(".nav-toggle");
links = document.querySelector(".links");

// when we click 
navToglle.addEventListener('click', () => {
    if (links.style.display == "block") {
        links.style.display = "none";
        navToglle.style.transform = "unset";
    }else {
        links.style.display = "block";
        navToglle.style.transform = "rotate(90deg)";
    }
})