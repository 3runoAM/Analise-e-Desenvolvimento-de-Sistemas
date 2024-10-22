// Crie um novo array chamado pesos.
//     Adicione 5 pesos.
//     Imprima a ordem invertida do vetor no console.
//     Imprima o vetor na ordem crescente.

const pesos = [200, 500, 400, 300, 100];

console.log("Array pesos: ", pesos);
console.log("Ordem reversa: ", pesos.reverse());
console.log("Ordem Crescente: ", pesos.sort((num1, num2) => num1 - num2));