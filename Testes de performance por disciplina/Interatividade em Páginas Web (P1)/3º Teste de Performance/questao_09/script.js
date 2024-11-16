const origin = document.getElementById("origin");
const destination = document.getElementById("destination");
const contentContainer = document.getElementById("content-container");

const button = document.createElement("button");
button.innerText = "Resetar";

let buttonCount = 0;
const pressCounter = document.createElement("p");
pressCounter.innerHTML = `O botão de resetar foi apertado <span>${buttonCount}</span>`;
button.addEventListener("click", () => {
    buttonCount++;
    pressCounter.querySelector("span").innerText = buttonCount;
    destination.querySelectorAll(".draggable").forEach((item) => {
        origin.appendChild(item);
    });
});
document.body.insertBefore(button, contentContainer);
document.body.insertBefore(pressCounter, contentContainer);

document.querySelectorAll(".area").forEach((item) => {
    item.addEventListener("dragover", dragOver);
    item.addEventListener("drop", drop);
});

document.querySelectorAll(".draggable").forEach((item) => {
    item.setAttribute("draggable", "true");
    item.addEventListener("dragstart", dragStart);
});

function dragStart(event) {
    event.dataTransfer.setData("text/html", event.target.id);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/html");
    const element = document.getElementById(data);
    event.target.appendChild(element);
}
