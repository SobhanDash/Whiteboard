//selectors
const pallete = document.querySelector(".penPallete");
const mainTray = document.querySelector(".tray");
const pen = document.querySelector("#penTool");


//event listeners
pen.addEventListener("click", () => {
  pallete.classList.toggle("tray-swap");
  mainTray.classList.toggle("tray-swap");
});
