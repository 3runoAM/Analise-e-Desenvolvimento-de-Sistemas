const modal = document.getElementById("modal");
modal.className = "hide";

/**/

const img = document.createElement("img");

img.src = "https://cdn-icons-png.flaticon.com/512/9068/9068678.png";
img.className = "background-size";
img.setAttribute("id", "close");
img.setAttribute("title", "Ocultar modal");

img.addEventListener("click", () => {
    modal.classList.add("hide");
})

/**/

const button = document.createElement("button");
button.innerText = "Mostrar Modal"

button.addEventListener("click", () => {
    modal.classList.remove("hide");
})

modal.appendChild(img);
document.body.appendChild(button);