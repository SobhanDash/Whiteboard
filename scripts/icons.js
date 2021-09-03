//selectors
const infoIcon = document.querySelector(".info-icon");
const infoContainer = document.querySelector(".info-container");
const closeBtn = document.querySelector(".close");
const backBtn = document.querySelector("#back");


// event listeners
infoIcon.addEventListener("click", () => {
  infoContainer.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  infoContainer.classList.remove("active");
});

backBtn.addEventListener("click", () => {
  pallete.classList.toggle("tray-swap");
  mainTray.classList.toggle("tray-swap");
});

