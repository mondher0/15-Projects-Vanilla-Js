const sideBar = document.querySelector(".sidebar");
const sideBarToggle = document.querySelector(".sidebar-toggle");
const sideBarClose = document.querySelector(".close-btn");

// Close and open sidebar with toggle button
sideBarToggle.addEventListener("click", () => {
  sideBar.classList.toggle("show-sidebar");
})
// Close sidebar with close button
sideBarClose.addEventListener("click", () => {
    sideBar.classList.toggle("show-sidebar");
})


