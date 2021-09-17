const addTextBtn = document.getElementById('addText');
const cancelTextBtn = document.getElementById('cancelBtn');
const addTextPopup = document.querySelector('.addTextContainer');
const addTextField = document.getElementById('addTextArea');
const finishText = document.getElementById('addBtn');

const addTextVars = {
    textSize: 18,
    textColor: '#ffffff',
}

finishText.addEventListener("click", addTextToCanvas);

addTextBtn.addEventListener("click", ()=>{
    addTextPopup.style.display = 'flex'
    addTextArea.value = ""
});

cancelTextBtn.addEventListener('click', ()=> {
    addTextPopup.style.display= 'none'
});

document.getElementById("textSizePicker")
    .addEventListener("input", (event)=>{ 
        addTextVars.textSize = event.target.value
        addTextField.style.fontSize = event.target.value + 'px'
    });

document.getElementById("textColorPicker")
    .addEventListener("input", (event)=>{ 
        addTextVars.textColor = event.target.value
        addTextField.style.color = event.target.value
    });

function addTextToCanvas() {
    let text = addTextField.value
    function addText(event) {
        save.saveUndoState();
        ctx.font = `${addTextVars.textSize}px 'serif'`;
        ctx.fillStyle = addTextVars.textColor
        ctx.fillText(text, event.clientX, event.clientY)
        canvas.removeEventListener("click", addText)
    }
    canvas.addEventListener("click", addText)
    addTextPopup.style.display = "none"
}