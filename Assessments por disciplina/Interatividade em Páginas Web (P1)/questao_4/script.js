const lista = document.body.firstElementChild;

const primeiroFilho = lista.firstElementChild;
const ultimoFilho = lista.lastElementChild;
const novoItem = document.createElement('li');
novoItem.textContent = 'Produto 4';

ultimoFilho.parentNode.appendChild(novoItem);