const lista = document.querySelector('ul');

lista.firstElementChild.firstElementChild.setAttribute('src', `https://plus.unsplash.com/premium_photo-1670204681014-9f9466fef260?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`)

const botaoRemover = document.createElement('button');
botaoRemover.innerText = 'Remover imagem';
botaoRemover.addEventListener('click', () => {
    if (lista.childElementCount > 0) {
        lista.lastElementChild.remove();
    } else {
        alert("Não há mais itens na lista!");
    }
});

const botaoAdicionar = document.createElement('button');
botaoAdicionar.innerText = 'Adicionar imagem';
botaoAdicionar.addEventListener('click', () => {
    const novoItem = document.createElement('li');
    fetch('https://picsum.photos/300/300')
        .then(response => {
            const novaImagem = document.createElement('img');
            novaImagem.setAttribute('src', response.url);
            novaImagem.setAttribute('alt', 'Imagem aleatória');
            novaImagem.setAttribute('title', 'Imagem aleatória');

            novoItem.appendChild(novaImagem);
        })
        .catch(error => {
            console.error('Erro:', error.message);
        });
    lista.appendChild(novoItem);
});

const div = document.createElement('div');
div.append(botaoAdicionar, botaoRemover);
div.setAttribute('id', 'botoes');

document.body.prepend(div);