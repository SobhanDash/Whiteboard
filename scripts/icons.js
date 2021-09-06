//SELECTORS
const infoIcon = document.querySelector(".info-icon");
const infoContainer = document.querySelector(".info-container");
const closeBtn = document.querySelector(".close");

// EVENT LISTENERS
infoIcon.addEventListener("click", () => {
  infoContainer.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  infoContainer.classList.remove("active");
});
