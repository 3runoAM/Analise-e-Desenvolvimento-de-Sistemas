const tbody = document.querySelector('table').children[1];
const colCount = document.querySelectorAll('th').length;
const addRowButton = document.getElementById('add-row');

const deleteRowButton = document.createElement('button');
deleteRowButton.innerText = 'Delete Row';

deleteRowButton.addEventListener('click', () => {
    if (tbody.children.length > 0) {
        tbody.children[tbody.children.length-1].remove();
    } else {
        alert("Todas as linhas foram deletadas")
    }
});

document.body.insertBefore(deleteRowButton, tbody.parentElement);

addRowButton.addEventListener('click', () => {
    const rowCount = tbody.children.length++;
    const tr = document.createElement('tr');

    let i = 1;
    do {
        const td = document.createElement('td');
        td.innerText = `C${i}-L${rowCount+1}`;
        tr.appendChild(td);

        i++;
    } while (i <= colCount);

    tbody.appendChild(tr);
});