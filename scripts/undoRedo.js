let undoBtn=document.getElementById("undo");
let redoBtn=document.getElementById("redo");

let save = {
    redos: [],
    undos: [],
    saveUndoState: function(){
        let checkPoint=canvas.toDataURL();
        this.undos.push(checkPoint);
    },
    saveRedoState: function(){
        let checkPoint=canvas.toDataURL();
        this.redos.push(checkPoint)
    }
}



function undo(){
    if(save.undos.length === 0){
        alert("You cannot undo what you never did, son!");
    }
    else{
        save.saveRedoState();
        let toRestore=save.undos.pop();
        let image = document.createElement('img');
        image.src = toRestore;
        image.onload = function(){
            ctx.clearRect(0,0,canvas.width, canvas.height);
            ctx.drawImage(image,0,0,canvas.width, canvas.height);
        }
    }
}

function redo(){
    if(save.redos.length === 0){
        alert("You wanna redo so much, DO IT FIRST!!!");
    }
    else{
        save.saveUndoState();
        let toRestore = save.redos.pop();
        let image = document.createElement('img');
        image.src=toRestore;
        image.onload = function(){
            ctx.clearRect(0,0,canvas.width, canvas.length);
            ctx.drawImage(image, 0,0,canvas.width, canvas.height);
        }
    }
}


undoBtn.addEventListener("click", undo);
redoBtn.addEventListener("click", redo);

window.addEventListener("keydown", (event) => {
    if(event.key ==='z' || event.key === 'Z'){
        if(event.ctrlKey){
            undo();
        }
    }
    if(event.key === 'y' || event.key === 'Y'){
        if(event.ctrlKey){
            redo();
        }
    }
})

