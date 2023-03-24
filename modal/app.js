const openModel = document.querySelector(".modal-btn");
const closeModel = document.querySelector(".close-btn");
const modalOverlay = document.querySelector(".modal-overlay");

// Open modal
openModel.addEventListener("click", () => {
    modalOverlay.classList.add("open-modal");
});

// Close modal
closeModel.addEventListener("click", () => {
    modalOverlay.classList.remove("open-modal");
});