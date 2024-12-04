const titulo = document.getElementById('titulo');
titulo.innerText = 'Lorem Ipsum';


const paragrafo = document.querySelectorAll('p');

paragrafo[0].textContent = `Lorem ipsum é um texto fictício utilizado na indústria gráfica e de design para preencher 
espaços em layouts antes de inserir o conteúdo final`

paragrafo.forEach(item => {
    item.classList.add('lavandaBackground');
});