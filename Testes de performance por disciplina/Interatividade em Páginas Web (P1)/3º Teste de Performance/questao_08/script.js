const originArea = document.getElementById('origin');
const destinationArea = document.getElementById('destination');
const draggableText = document.getElementById('draggable-text');
const draggableBox = document.getElementById('draggable-box');
const draggableImage = document.getElementById('draggable-image');

function dragstart_handler(ev) {
    console.log("dragStart");
}


document.querySelectorAll('.draggable').forEach(item => {
    item.setAttribute('draggable', 'true');
});

