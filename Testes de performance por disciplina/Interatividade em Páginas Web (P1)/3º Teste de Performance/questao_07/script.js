const darkModeButton = document.getElementById("dark-mode-button");
const body = document.body;
const header = body.children[0];




const img = document.createElement("img");
img.setAttribute("src", "https://images.unsplash.com/photo-1721332154161-847851ea188b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
img.setAttribute("alt", "Pessoa insere cartão de memória em antigo console portátil");
img.setAttribute("title", "Pessoa insere cartão de memória em antigo console portátil");
header.appendChild(img);



let listItemCount = header.children[0].children[0].children.length;
const footer = header.nextElementSibling.nextElementSibling;
const ul = document.createElement("ul");
do {
    const li = document.createElement("li");
    li.textContent = `Item ${ul.children.length + 1}`;
    ul.appendChild(li);
    listItemCount--;
} while (listItemCount > 0);
footer.appendChild(ul);



const section = body.children[1].children[0];
let userName = "";
do {
    userName = prompt("Qual é o seu nome?");
} while (userName === "");
const userNameP = document.createElement('p');
userNameP.innerText = `Hello ${userName}`;
section.insertBefore(userNameP, section.firstChild);



const table= `<table>
<thead>
    <tr>
        <th>Produto</th>
        <th>Quantidade</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>Pneu</td>
        <td>4</td>
    </tr>
    <tr>
        <td>Caixa de marchas</td>
        <td>1</td>
    </tr>
</table>`
const tableContainer = document.createElement("div");
tableContainer.innerHTML = table;
section.appendChild(tableContainer);



darkModeButton.addEventListener("click", () => {
    body.classList.toggle("dark");
    body.querySelectorAll("a").forEach((li) => {
        li.classList.toggle("dark");
    });
});