const lista = document.querySelector('ul');
lista.firstElementChild.firstElementChild.setAttribute('src', `https://plus.unsplash.com/premium_photo-1670204681014-9f9466fef260?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`)

const botaoAdicionar = document.createElement('button');
botaoAdicionar.innerText = 'Adicionar imagem';
botaoAdicionar.addEventListener('click', () => {
    const novoItem = document.createElement('li');

    fetch('https://picsum.photos/300/300')
        .then(response => {
            console.log('Imagem acessada com sucesso:', response);
            const novaImagem = document.createElement('img');
            novaImagem.setAttribute('src', response.url);
            novaImagem.setAttribute('alt', 'Imagem aleatória');
            novaImagem.setAttribute('title', 'Imagem aleatória');
            novoItem.appendChild(novaImagem);
        })
        .catch(error => {
            console.error('Erro ao acessar imagem:', error.message);
        });

    lista.appendChild(novoItem);
});


const botaoRemover = document.createElement('button');
botaoRemover.innerText = 'Remover imagem';
botaoRemover.addEventListener('click', () => {
    if (lista.childElementCount > 0) {
        lista.removeChild(lista.lastElementChild);
    } else {
        alert("Não há mais itens na lista!");
    }
});

document.body.insertBefore(botaoAdicionar, lista);
document.body.insertBefore(botaoRemover, lista);