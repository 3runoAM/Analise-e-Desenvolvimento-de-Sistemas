let massa = Number(prompt("Digite a massa (kg):"));
let aceleração = Number(prompt("Digite a aceleração (m/s):"));

let trabalho = Number(prompt("Digite o trabalho (J):"))
let tempo = Number(prompt("Digite o tempo (s):"));

alert(calcularForca(aceleração, massa));
alert(calcularPotencia(trabalho, tempo));

function calcularForca(aceleracao, massa) {
  if(verificarGrandezas(aceleracao, massa)){
    return "Impossível calcular";
  }
  return `A força é: ${massa * aceleracao}`;
}

function calcularPotencia(trabalho, tempo) {
  if(verificarGrandezas(trabalho, tempo)) {
    return "Impossível calcular";
  }
  return `A potência é ${trabalho / tempo}`;
}

function verificarGrandezas(primeiraGrandeza, segundaGrandeza) { // Massa e tempo não podem ser 0
  return isNaN(primeiraGrandeza) || isNaN(segundaGrandeza) || primeiraGrandeza < 0 || segundaGrandeza <= 0;
}