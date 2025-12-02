const botaoAdicionar = document.querySelector('button');

const input = document.querySelector('input');
input.setAttribute('maxLength', '20');

const lista = document.querySelector('ul');

botaoAdicionar.addEventListener('click', (e) => {
    e.preventDefault();
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
        return;
    }
    alert('A descrição da tarefa não pode ser vazia');
});