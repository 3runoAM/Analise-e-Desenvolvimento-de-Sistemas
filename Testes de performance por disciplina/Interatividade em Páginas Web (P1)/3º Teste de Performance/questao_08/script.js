document.querySelectorAll('.area').forEach(item => {
    item.addEventListener('dragover', dragOver);
    item.addEventListener('drop', drop);
})

document.querySelectorAll('.draggable').forEach(item => {
    item.setAttribute('draggable', 'true');
    item.addEventListener('dragstart', dragStart);
});


function dragStart(event) {
    event.dataTransfer.setData('text/html', event.target.id);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/html');
    const element = document.getElementById(data);
    event.target.appendChild(element);
}