const div = document.querySelector('div');

div.style.cursor = "pointer";

div.addEventListener('click', function(){
    div.style.backgroundColor = "blue";
    div.style.color = "white";
    div.style.borderColor = "orange";
    div.style.width = "2px";
    div.style.hight = "2px";
})