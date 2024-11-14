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



darkModeButton.addEventListener("click", () => {
    body.classList.toggle("dark");

    body.querySelectorAll("a").forEach((li) => {
        li.classList.toggle("dark");
    });
});