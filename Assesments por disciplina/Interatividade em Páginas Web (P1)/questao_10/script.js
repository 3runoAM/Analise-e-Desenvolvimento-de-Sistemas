const linguagemNavegador = window.navigator.language;
const url = window.location.href;
const body = document.body;

window.onload = () => {
    console.log("Página carregada!!!");

    const p = document.createElement('p');
    p.textContent = `A linguagem de instalação do navegador é ${linguagemNavegador} e a url é ${url}`;

    body.prepend(p);
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const p = body.querySelector('p');

        if(p.textContent.includes(linguagemNavegador) && p.textContent.includes(url)){
            alert("A página contem a linguagem do navegador e a url.");
        } else {
            alert("A página não contem a linguagem do navegador e a url.");
        }
    }, 500);
})