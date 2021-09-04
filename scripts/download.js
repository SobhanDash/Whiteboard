document.getElementById("download")
    .addEventListener("click", ()=>{
        let link = document.createElement('a');
        link.download = 'drawing.png';
        link.href = document.getElementById('slate').toDataURL()
        link.click();
    });