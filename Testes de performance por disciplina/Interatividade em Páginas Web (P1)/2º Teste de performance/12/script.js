const list = document.createElement("ul");
list.setAttribute("id", "lista");

const button = document.createElement("button");
button.innerText = "Inserir";

button.addEventListener("click", () => {
    const li = document.createElement("li");
    li.innerText = "Nova entrada";
    list.appendChild(li)
})


document.body.append(button);
document.body.append(list);