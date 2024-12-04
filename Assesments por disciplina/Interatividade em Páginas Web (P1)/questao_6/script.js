const caixa = document.querySelector('.caixa');
caixa.className = 'ativa';

const button = document.createElement('button');
button.innerText = 'Alterar modo';

button.addEventListener('click', () => {
    caixa.classList.toggle('ativa');
    body.classList.toggle('ativa');
});

const body = caixa.parentNode;
body.appendChild(button);