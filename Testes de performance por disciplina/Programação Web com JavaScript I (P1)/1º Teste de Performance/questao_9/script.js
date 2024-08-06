let massa = Number(prompt("Digite a massa do objeto:"));
let velocidade = Number(prompt("Digite a velocidade do objeto:"));

console.log(calcularEnergiaCinetica(massa, velocidade))

function calcularEnergiaCinetica(massa, velocidade) {
  if(verificarGrandezas(massa, velocidade)) {
    return "Impossível calcular";
  }
  return `Energia cinética de: ${(massa * (velocidade ** 2)) / 2} joules`;
}

function verificarGrandezas(massa, velocidade) { // Massa não pode ser 0
  return isNaN(massa) || isNaN(velocidade) || massa <= 0;
}