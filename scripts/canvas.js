// selectors
const canvas = document.querySelector("#slate");

//canvas needs a context 2d or 3d
const ctx = canvas.getContext("2d");

//increase canvas width and height according to screen size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let draw_color = "#f0f8ff";
let draw_width = 4;
//when two lines meet whats the shape of the end of corner
ctx.lineJoin = "round";
//whats the shape of the line caps(ends)
ctx.lineCap = "round";
let isDrawing = false;
