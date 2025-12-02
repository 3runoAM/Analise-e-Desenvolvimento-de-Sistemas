const anoAtual = Number(prompt("Ano atual:"));
const mesAtual = Number(prompt("Mes atual:"));
const idade = Number(prompt("Sua idade:"));
const mesesAteAniversario = Number(prompt("Meses até o aniversário:"));

let anoNascimento = anoAtual - idade;

if (mesesAteAniversario > 0) {
  anoNascimento -= 1;
}

let mesDeNascimento = mesAtual + mesesAteAniversario;

if (mesDeNascimento > 12) {
  mesDeNascimento -= 12;
  anoNascimento += 1;
}

console.log(`O ano de nascimento é ${anoNascimento} e o mês de nascimento é ${mesDeNascimento}`);