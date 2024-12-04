const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const telefone = form.querySelector('#telefone').value;
    const mensagem = form.querySelector('#mensagem').value;

    if(telefone && mensagem) {
        window.open(`https://wa.me/${telefone}?text=${mensagem}`, '_blank');
    } else {
        alert('Preencha todos os campos!');
    }
});