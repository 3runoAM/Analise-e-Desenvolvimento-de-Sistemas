const novoContainer = document.getElementById('novo');
const addNewDraggableButton = document.getElementById('add-new-draggable');
const SELETORES = ['corVerde', 'corRoxa', 'corLaranja', 'corVermelha'];
let id = 1;

addNewDraggableButton.addEventListener('click', () => {
    const caixinha = document.createElement('div');
    const seletorDeCor = SELETORES[Math.floor(Math.random() * SELETORES.length)];
    caixinha.className = `caixinha ${seletorDeCor}`;

    caixinha.setAttribute('id', `caixinha-${id++}`);
    caixinha.setAttribute('draggable', 'true');
    caixinha.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/html', event.target.id);
    })

    novoContainer.appendChild(caixinha);
});

const containers = document.querySelectorAll('.container');
containers.forEach(container => {
    container.addEventListener('dragover', (event) => {
        event.preventDefault();
    });

    container.addEventListener('drop', (event) => {
        const id = event.dataTransfer.getData('text/html');
        const elementoArrastado = document.getElementById(id);

        container.appendChild(elementoArrastado);
    });
})