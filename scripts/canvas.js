// SELECTORS
const canvas = document.querySelector("#slate");

//canvas needs a context 2d or 3d
const ctx = canvas.getContext("2d");

//increase canvas width and height according to screen size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//default variables for canvas
let drawColor = "#519e8a";
colorPicker.style.color = "#519e8a";
let drawWidth = 4;
//when two lines meet whats the shape of the end of corner
ctx.lineJoin = "round";
//whats the shape of the line caps(ends)
ctx.lineCap = "round";
ctx.translate(0.5, 0.5);
let isDrawing = false;
let activeTool = null;

//window resize
window.onresize = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

//common FUNCTIONS
function inactiveTool() {
  document.querySelectorAll(".active-tool").forEach((tool) => {
    tool.classList.remove("active-tool");
  });
}
