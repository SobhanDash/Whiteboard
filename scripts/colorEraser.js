// SELECTORS
const eraser = document.querySelector("#erase");

//FUCNTIONS
function changeColor(e) {
  inactiveTool();
  activeTool = "pen";
  colorPicker.classList.add("active-tool");
  drawColor = e.value;
  colorPicker.style.color = e.value;
}

//EVENT LISTENERS
eraser.addEventListener("click", () => {
  inactiveTool();
  activeTool = "pen";
  drawColor = "";
  eraser.classList.toggle("active-tool");
});
