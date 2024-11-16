const inputTexto = document.getElementById('texto');
const nome = document.getElementById('nome');

inputTexto.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        nome.innerText = inputTexto.value;
        inputTexto.value = '';
    }
});