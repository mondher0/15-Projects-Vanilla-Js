const sideBar = document.querySelector(".sidebar");
const sideBarToggle = document.querySelector(".sidebar-toggle");
const sideBarClose = document.querySelector(".close-btn");

// Close and open sidebar with toggle button
sideBarToggle.addEventListener("click", () => {
    if (sideBar.style.display == "none") {
        sideBar.style.display = "grid";
    }else {
        sideBar.style.display = "none";
    }
})
// Close sidebar with close button
sideBarClose.addEventListener("click", () => {
    sideBar.style.display = "none";
})


