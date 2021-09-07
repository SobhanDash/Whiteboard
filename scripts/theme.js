//SELECTORS
const theme = document.querySelector("#theme");

//EVENT LISTENERS
theme.addEventListener("click", () => {
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  theme.classList.toggle("ri-sun-line");
  theme.classList.toggle("ri-moon-line");
  document.body.classList.toggle("light");
});
