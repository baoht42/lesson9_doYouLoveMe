function sayYes(){
   alert("ok");
}

function noHover(){
    let a = Math.random() * window.innerHeight;
    let b = Math.random() * window.innerWidth;
    document.getElementById("no").style.top = a + 'px';
    document.getElementById("no").style.left = b + 'px';
}