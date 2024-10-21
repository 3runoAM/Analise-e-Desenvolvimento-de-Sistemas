const valorDoProduto = Number(prompt("Digite o valor:"));
let isPromocao = prompt("O produto está em promoção? Sim/Não:").toLowerCase();

if (isPromocao === "sim") {
  isPromocao = true;
} else {
  isPromocao = false;
}

const isMenorQue200 = valorDoProduto < 200;
const isEntre200E3000 = valorDoProduto >= 200 && valorDoProduto <= 3000;

if (isMenorQue200 && !isPromocao) {
  alert("Barato");
} else if (isEntre200E3000 && isPromocao) {
  alert("Moderado");
} else {
  alert("Caro");
}
