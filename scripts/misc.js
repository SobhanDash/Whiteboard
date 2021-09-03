//selectors
const infoIcon = document.querySelector(".info-icon");
const infoContainer = document.querySelector(".info-container");
const closeBtn = document.querySelector(".close");
const backBtn = document.querySelector("#back");
const pallete = document.querySelector(".penPallete");
const mainTray = document.querySelector(".tray");
const pen = document.querySelector("#penTool");
const theme = document.querySelector("#theme");

// event listeners
infoIcon.addEventListener("click", () => {
  infoContainer.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  infoContainer.classList.remove("active");
});

theme.addEventListener("click", () => {
  theme.classList.toggle("ri-sun-line");
  theme.classList.toggle("ri-moon-line");
  document.body.classList.toggle("light");
});

backBtn.addEventListener("click", () => {
  pallete.classList.toggle("tray-swap");
  mainTray.classList.toggle("tray-swap");
});

pen.addEventListener("click", () => {
  pallete.classList.toggle("tray-swap");
  mainTray.classList.toggle("tray-swap");
});
