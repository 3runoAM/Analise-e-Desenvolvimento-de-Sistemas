let primeiroNumero = Number(prompt("Digite o primeiro número:"));
let segundoNumero = Number(prompt("Digite o segundo número:"));

console.log(realizarOperações(primeiroNumero, segundoNumero))

function realizarOperações(primeiroNumero, segundoNumero) {
  if (verificarNumeros(primeiroNumero, segundoNumero)) {
    return "Impossível calcular";
  }
  return `Adição: ${primeiroNumero + segundoNumero}\n` +
    `Subtração: ${primeiroNumero - segundoNumero}\n` +
    `Multiplicação: ${primeiroNumero * segundoNumero}\n` +
    `Divisão: ${primeiroNumero / segundoNumero}`;
}

function verificarNumeros(primeiroNumero, segundoNumero) { // Divisões por 0 não podem ser calculadas
  return isNaN(primeiroNumero) || isNaN(segundoNumero) || segundoNumero <= 0;
}