const unorderedList = document.getElementById('lista');

unorderedList.addEventListener('click', () => {
    const firstLi = unorderedList.children[0];
    firstLi.innerText = 'Amapá';
    firstLi.className = 'blue-background';
});