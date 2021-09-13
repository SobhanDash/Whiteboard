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

function startErase(e) {
  endErase();
  isDrawing = true;
  ctx.beginPath();
  ctx.moveTo(e.clientX, e.clientY);
}

function erase(e) {
  if (!isDrawing) return;

  if (isDrawing && activeTool === "eraser") {
    ctx.lineTo(e.clientX, e.clientY);
    ctx.lineWidth = drawWidth;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.globalCompositeOperation = "destination-out";
  }
}

function endErase(e) {
  if (isDrawing) {
    ctx.globalCompositeOperation = "source-over";
    ctx.stroke();
    ctx.closePath();
    isDrawing = false;
  }
  save.saveUndoState();
}

//EVENT LISTENERS
eraser.addEventListener("click", () => {
  inactiveTool();
  activeTool = "eraser";
  eraser.classList.toggle("active-tool");
});

// on touch/mousedown start drawing, move to continue, and mouseup/leave touch to stop
//for mobile and tabs
canvas.addEventListener("touchstart", startErase);
canvas.addEventListener("touchmove", erase);
canvas.addEventListener("touchend", endErase);
//for pc
canvas.addEventListener("mousedown", startErase);
canvas.addEventListener("mousemove", erase);
canvas.addEventListener("mouseup", endErase);
