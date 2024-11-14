const button = document.querySelector('button');
const unorderedList = document.querySelector('ul');

button.innerText = 'Adicionar item';
button.addEventListener('click', () => {
    const ulChildren = unorderedList.children.length;
    const listItem = document.createElement('li');

    listItem.innerText = `Item ${ulChildren + 1}`;
    listItem.setAttribute('id', `item-${ulChildren + 1}`);
    unorderedList.appendChild(listItem);

    if(ulChildren === 9) {
        alert('Item 10 foi criado.')
    }
});