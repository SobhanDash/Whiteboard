//SELECTORS
const pallete = document.querySelector(".penPallete");
const mainTray = document.querySelector(".tray");
const pen = document.querySelector("#penPallete");
const colorPicker = document.querySelector("#colorPicker");
const backBtn = document.querySelector("#back");
const pens = document.querySelectorAll(".defPen");
const high = document.querySelector(".highlight");

//FUNCTIONS
function startDraw(e) {
  endDraw();
  isDrawing = true;
  ctx.beginPath();
  ctx.moveTo(e.clientX, e.clientY);
}

function draw(e) {
  if (!isDrawing) return;

  if (isDrawing && activeTool === "pen") {
    ctx.lineTo(e.clientX, e.clientY);
    ctx.strokeStyle = drawColor;
    ctx.lineWidth = drawWidth;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.stroke();
  }
}

function hdraw(e) {
  if (!isDrawing) return;
  if (isDrawing && activeTool === "highlighter") {
    ctx.lineTo(e.clientX, e.clientY);
    ctx.strokeStyle = "yellowgreen";
    ctx.lineWidth = 30;
    ctx.lineCap = "butt";
    ctx.lineJoin = "round";
    ctx.stroke();
  }
}

function endDraw(e) {
  if (isDrawing) {
    ctx.stroke();
    ctx.closePath();
    isDrawing = false;
  }
}

//EVENT LISTENERSs
//back to main tray
backBtn.addEventListener("click", () => {
  pallete.classList.toggle("tray-swap");
  mainTray.classList.toggle("tray-swap");
  inactiveTool();
  activeTool = null;
});

//for pen pallete tray
pen.addEventListener("click", () => {
  inactiveTool();
  pallete.classList.toggle("tray-swap");
  mainTray.classList.toggle("tray-swap");
  colorPicker.classList.add("active-tool");
  activeTool = "pen";
});

//changes pen color and activates it
pens.forEach((pen) => {
  pen.addEventListener("click", () => {
    inactiveTool();
    activeTool = "pen";
    drawColor = pen.style.color;
    pen.classList.add("active-tool");
  });
});

high.addEventListener("click", () => {
  inactiveTool();
  activeTool = "highlighter";
  high.classList.add("active-tool");
});

// on touch/mousedown start drawing, move to continue, and mouseup/leave touch to stop
//for mobile and tabs
canvas.addEventListener("touchstart", startDraw);
canvas.addEventListener("touchmove", draw);
canvas.addEventListener("touchend", endDraw);
//for pc
canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousemove", hdraw);
canvas.addEventListener("mouseup", endDraw);
