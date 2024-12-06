const secao = document.querySelector('section');
const fragment = document.createDocumentFragment();
const h1 = document.createElement('h1');

h1.textContent = 'Produtos Fake Store API';
document.body.prepend(h1);

fetch('https://fakestoreapi.com/products?limit=10')
    .then(response => {
        const p = document.createElement('p');
        p.textContent = 'Carregando...';

        return response.json();
    })
    .then(data => {
        data.forEach((product) => {
            const titulo = document.createElement('h2');
            titulo.textContent = product.title;

            const imagem = document.createElement('img');
            imagem.setAttribute('src', product.image);

            const preco = document.createElement('p');
            preco.textContent = `R$${product.price}`

            const descricao = document.createElement('p');
            descricao.textContent = product.description;

            const infoContainer = document.createElement('div');
            infoContainer.className = 'info-container';
            infoContainer.append(preco, descricao)

            const card = document.createElement('card');
            card.className = 'card';
            card.append(titulo, imagem, infoContainer);

            fragment.appendChild(card);
        });
        secao.appendChild(fragment);
    })
    .catch((err) => {
        console.log('Erro: ', err);
    })
