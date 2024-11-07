const contentContainer = document.getElementById("content-container");

const unorderedList = document.createElement("ul");

for (let i = 0; i <= 2; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `List item ${i + 1}`;
    listItem.className = "item-list";
    unorderedList.appendChild(listItem);
}

contentContainer.appendChild(unorderedList);