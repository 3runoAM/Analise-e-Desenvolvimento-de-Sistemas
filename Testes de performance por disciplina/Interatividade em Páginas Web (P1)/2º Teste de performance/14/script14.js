const button = document.getElementById("trocarClasses");

button.addEventListener("click", () => {
    const tBody = document.querySelector('tbody');
    const trArray = Array.from(tBody.children);

    trArray.forEach((tr, index) => {
        tr.className = tr.className === "vermelho" ? "azul" : "vermelho";
    });
});