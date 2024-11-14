const img = document.querySelector("img");

img.addEventListener("load", () => {
    img.classList.add("load-complete");

    const p = document.createElement("p");
    p.innerText = "Imagem carregada com sucesso!";

    img.after(p);
});