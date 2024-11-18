// - Evento drag

// O evento `drag` ocorre quando um elemento, é `arrastado` pelo usuário. Ele é `disparado` no elemento que está sendo
// arrastado. Para habilitar o `arrastar` de um elemento, é necessário definir o atributo `draggable`, como `true` para
// esse elemento. Além disso, é necessário adicionar um `ouvinte de evento`, para o evento `dragstart` no elemento
// arrastado, que define os dados a serem `transferidos` durante o arrastar, utilizando o método `setData` do objeto
//  `dataTransfer`


const caixinhas = document.querySelectorAll('.caixinha');
caixinhas.forEach(caixinha => {
  caixinha.addEventListener('dragstart', (event) => {
      event.dataTransfer.setData("text/html", event.target.id);
  });
});

// <br>

// - Evento drop

// O evento `drop` ocorre quando um elemento arrastado, é `solto` em um alvo `válido`. Ele é `disparado` no elemento de
// destino, onde o `elemento arrastado` está sendo `solto`. Para `permitir` que um elemento seja `solto` em um `alvo`, é
// necessário adicionar um `ouvinte de evento`, para o evento `dragover` no elemento de destino e, dentro desse ouvinte,
// chamar o método `preventDefault()` para permitir que o elemento seja solto. Além disso, é necessário adicionar um
//  ouvinte de evento para o evento `drop` no elemento de destino, onde a `lógica` para manipular os `dados
//  transferidos` é implementada.

const containeres = document.querySelectorAll('.container');
containeres.forEach(container => {
    container.addEventListener('dragover', (event) => {
        event.preventDefault()
    })
    container.addEventListener('drop', (event) => {
        const id = event.dataTransfer.getData('text/html');
        const elemento = document.getElementById(id);
        event.target.appendChild(elemento);
    });
})