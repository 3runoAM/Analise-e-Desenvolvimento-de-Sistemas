const tBody = document.querySelector('tbody');
const trArray = tBody.children;

for(let tr of trArray){
    const button = tr.lastElementChild.firstChild;

    button.addEventListener('click', () => {
        tr.className = Number(tr.children[1].innerText) >= 5 ? "verde" : "vermelho";
    });
}