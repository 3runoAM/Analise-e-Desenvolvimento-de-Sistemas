/*Undefined representa um valor que não foi definido, já null representa a uma ausência de valor ou um valor nulo.*/

let varA; // Variável declarada, mas o valor não foi definido
let varB = null; // Variável de valor nulo

console.log(varA); // Exibe undefined no console.

/* Quando um usuário não define o seu endereço (ou qualquer outra informação) em um formulário, por exemplo, o valor
inicial pode ser null*/
let user = {
    name: null,
    address: null
}

user.name = "Bruno"
console.log(user.name) // Exibe Bruno

// Caso não seja setado e tentemos acessar essa informação, ela ainda será null
console.log(user.address); // Exibe null