const numeroCentro = Number(prompt("Digite o número:"));
const distancia = Number(prompt("Digite o número:"));

console.log(getRandomNumber(numeroCentro, distancia));

function getRandomNumber(numeroCentro, distancia) {
  const max = numeroCentro + distancia;
  const min = numeroCentro - distancia;

  return Math.round(Math.random() * (max - min) + min);
}
