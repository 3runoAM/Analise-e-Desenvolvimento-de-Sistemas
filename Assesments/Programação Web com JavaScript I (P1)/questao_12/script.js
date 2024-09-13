const anoAtual = Number(prompt("Ano atual:"));
const mesAtual = Number(prompt("Mes atual:"));
const idade = Number(prompt("Sua idade:"));
const mesesAteAniversario = Number(prompt("Meses até o aniversário:"));

let anoNascimento = anoAtual - idade;
let mesDeNascimento = mesAtual + mesesAteAniversario;

if (mesDeNascimento > 12) {
  mesDeNascimento -= 12;
  anoNascimento += 1;
} else if (mesDeNascimento < 1) {
  mesDeNascimento += 12;
  anoNascimento -= 1;
}

alert(
  `O ano de nascimento é ${anoNascimento} e o mês de nascimento é ${mesDeNascimento}`
);
