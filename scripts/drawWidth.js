//SELECTORS
const stroke = document.querySelector(".stroke");

//FUNCTIONS
function strokeWidth(e) {
  if (e.deltaY < 0 && drawWidth < 100) {
    drawWidth++;
  } else if (drawWidth > 0) {
    drawWidth--;
  }
  stroke.style.background = `${drawColor}`;
  stroke.style.visibility = "visible";
  stroke.style.width = `${drawWidth}px`;
  stroke.style.height = `${drawWidth}px`;
  setTimeout(() => {
    stroke.style.visibility = "hidden";
  }, 1000);
}

//EVENT LISTENERS
document.body.addEventListener("wheel", strokeWidth);
