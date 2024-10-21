const idade = Number(prompt("Digite a idade:"));
let isPremium = prompt("O usuário é premium? (Sim/Nao)").toLowerCase();

showAcessoConcedido(idade, isPremium);

function showAcessoConcedido(idade, isPremium) {
  if (isPremium === "sim") {
    isPremium = true;
  } else if (isPremium === "não" || isPremium == "nao") {
    isPremium = false;
  } else {
    alert("Resposta inválida");
    return;
  }
  const isMaiorDe21 = idade >= 21;

  const isAcessoConcedido = isPremium && isMaiorDe21 ? true : false;
  console.log(isAcessoConcedido);
}
