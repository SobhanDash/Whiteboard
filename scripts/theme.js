//SELECTORS
const theme = document.querySelector("#theme");

//EVENT LISTENERS
theme.addEventListener("click", () => {
  theme.classList.toggle("ri-sun-line");
  theme.classList.toggle("ri-moon-line");
  document.body.classList.toggle("light");
});
