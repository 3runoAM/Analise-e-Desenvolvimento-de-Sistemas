const darkModeButton = document.getElementById("dark-mode-button");
const body = document.body;

const img = document.createElement("img");
img.setAttribute("src", "https://images.unsplash.com/photo-1721332154161-847851ea188b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
img.setAttribute("alt", "Pessoa insere cartão de memória em antigo console portátil");
img.setAttribute("title", "Pessoa insere cartão de memória em antigo console portátil");
console.log(body.children[0].appendChild(img));

darkModeButton.addEventListener("click", () => {
    body.classList.toggle("dark");

    body.querySelectorAll("a").forEach((li) => {
        li.classList.toggle("dark");
    });
});