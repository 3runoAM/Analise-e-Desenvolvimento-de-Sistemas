const form = document.querySelector('form');

const internationalPhoneFormat = /^\+\d{1,3}\d{10,11}$/;

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const telefone = form.querySelector('#telefone').value;
    const mensagem = form.querySelector('#mensagem').value;
    const telefoneValido = internationalPhoneFormat.test(telefone);

    if(telefone && telefoneValido && mensagem) {
        window.open(`https://wa.me/${telefone}?text=${mensagem}`, '_blank');
    } else {
        alert('Campos vazios ou incorretos');
    }
});