const contentContainer = document.getElementById("content-container");
const fragment = document.createDocumentFragment();

const unorderedList = document.createElement("ul");
for (let i = 0; i <= 2; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `Item ${i + 1}`;
    listItem.className = "item-list";
    unorderedList.appendChild(listItem);
}
fragment.appendChild(unorderedList);

/**/

const firstParagraph = document.createElement("p");
firstParagraph.setAttribute("id", "primeiro")
firstParagraph.innerText = "Primeiro parágrafo";
fragment.appendChild(firstParagraph);

const secondParagraph = document.createElement("p");
secondParagraph.setAttribute("id", "segundo");
secondParagraph.innerText = "Segundo parágrafo";
fragment.appendChild(secondParagraph);

const heading = document.createElement("h2");
fragment.insertBefore(heading, secondParagraph);

/**/

const section = document.createElement("section");
section.setAttribute("id", "galeria");
section.classList.add("flex");

const sourcesArray = [
    "https://plus.unsplash.com/premium_photo-1715457841520-6079d7d9459a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1700165319849-19f5f7ab8ba7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://media.istockphoto.com/id/1175935913/pt/foto/sculpture-thinker-with-golden-vr-glasses-over-pink-background.jpg?s=1024x1024&w=is&k=20&c=3uEbmcQEHTXo2nJq8wUfy0RPFnD2rmc2dOrRMFwt1pI="
];

sourcesArray.forEach(source => {
    const image = document.createElement("img");
    image.src = source;
    section.appendChild(image);
})
fragment.appendChild(section);

/**/

const ul = fragment.firstElementChild;
ul.removeChild(ul.firstChild);
fragment.removeChild(firstParagraph)

/**/

const newLi = document.createElement("li");
newLi.innerText = "Novo list item";

ul.replaceChild(newLi, ul.lastChild);

/**/

contentContainer.appendChild(fragment);