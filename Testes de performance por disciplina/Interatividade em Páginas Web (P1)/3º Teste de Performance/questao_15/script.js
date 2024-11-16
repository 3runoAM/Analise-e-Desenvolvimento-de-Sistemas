const container = document.getElementById('container');
const span = container.children[0];

container.addEventListener('click', () => {
    span.textContent = 'teste';
});