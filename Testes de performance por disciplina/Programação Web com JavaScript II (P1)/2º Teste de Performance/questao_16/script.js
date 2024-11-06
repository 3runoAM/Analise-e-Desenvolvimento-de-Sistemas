let contator = 0;

let rangePredicate = (value) => value < 1 || value > 10;

let incremento = '_';
do {
    incremento = prompt("Digite um número para incrementar o contador: ");
} while (incremento === "" || isNaN(incremento) || rangePredicate(incremento));


let userResponse = "";
do {
    console.log(`Contador: ${contator}`);
    contator += Number(incremento);
    userResponse = prompt("Deseja continuar incrementando o contador?");
} while (userResponse !== "Não")

alert(`Contador final: ${contator}`);