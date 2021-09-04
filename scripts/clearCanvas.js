const clearBoard = document.getElementById('clearAll');
const clearBoard2 = document.getElementById('clearAll2');

function clear() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.beginPath();
}

clearBoard.addEventListener('click', clear);
clearBoard2.addEventListener('click', clear);


