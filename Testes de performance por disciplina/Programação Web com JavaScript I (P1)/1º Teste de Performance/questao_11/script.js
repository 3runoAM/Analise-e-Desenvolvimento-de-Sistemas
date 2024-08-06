let distancia = Number(prompt("Digite a distância (metros):"))
let tempo = Number(prompt("Digite o tempo (segundos):"))

alert(calcularVelocidadeMedia(distancia, tempo));

function calcularVelocidadeMedia(distancia, tempo) {
  if(verificarGrandezas(distancia, tempo)) {
    return "Impossível calcular";
  }
  return `Velocidade média é de ${distancia / tempo} metros por segundo`;
}

function verificarGrandezas(distancia, tempo) { // tempo não pode ser 0
  return isNaN(distancia) || isNaN(tempo) || tempo <= 0;
}