const tbody = document.querySelector('table').children[1];
const colCount = document.querySelectorAll('th').length;
const addRowButton = document.getElementById('add-row');

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