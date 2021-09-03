//selector
const theme = document.querySelector("#theme");

//event listener
theme.addEventListener("click", () => {
  theme.classList.toggle("ri-sun-line");
  theme.classList.toggle("ri-moon-line");
  document.body.classList.toggle("light");
});
