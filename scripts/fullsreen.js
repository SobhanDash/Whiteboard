//selectors
const fullscreen = document.querySelector(".full");
const fullLabel = document.querySelector(".fullLabel");
const fs = document.documentElement;

//functions
function openScreen() {
  fullscreen.classList.remove("ri-fullscreen-fill");
  fullscreen.classList.add("ri-fullscreen-exit-fill");
  if (fs.requestFullscreen) {
    fs.requestFullscreen();
  } else if (fs.webkitRequestFullscreen) {
    fs.webkitRequestFullscreen();
  } else if (fs.msRequestFullscreen) {
    fs.msRequestFullscreen();
  }
}

function closeScreen() {
  fullscreen.classList.remove("ri-fullscreen-exit-fill");
  fullscreen.classList.add("ri-fullscreen-fill");
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  } else {
    fs.requestFullscreen();
  }
}

function iconChange() {
  if (fullscreen.classList.contains("ri-fullscreen-fill")) {
    openScreen();
  } else {
    closeScreen();
  }
}

//event listener
fullscreen.addEventListener("click", iconChange);
