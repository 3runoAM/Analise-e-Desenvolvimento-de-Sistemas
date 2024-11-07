const insertButton = document.getElementById("insertButton")

insertButton.addEventListener("click", () => {
    const paragraph = document.createElement("p");

    paragraph.innerHTML = "Hello, World!<br>Welcome to Interatividade em Páginas Web";
    paragraph.classList.add("yellow-background", "blue-text");

    insertButton.parentElement.append(paragraph);
})