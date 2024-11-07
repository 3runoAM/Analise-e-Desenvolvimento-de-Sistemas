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

contentContainer.appendChild(fragment);


