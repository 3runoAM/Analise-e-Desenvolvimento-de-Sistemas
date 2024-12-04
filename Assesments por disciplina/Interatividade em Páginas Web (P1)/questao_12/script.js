const botaoAdicionar = document.querySelector('button');
const input = document.querySelector('input');
const lista = document.querySelector('ul');

botaoAdicionar.addEventListener('click', () => {
    if(input.value){
        const novoItem = document.createElement('li');

        const p = document.createElement('p');
        p.textContent = input.value;

        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover';
        botaoRemover.addEventListener('click', () => {
            lista.removeChild(novoItem);
        })

        novoItem.appendChild(p);
        novoItem.appendChild(botaoRemover);

        lista.appendChild(novoItem);
        input.value = '';
    }
});