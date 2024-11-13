const figurasHistoricas = [
  {
    nome: "Albert",
    sobrenome: "Einstein",
    idade: 76,
    dataNascimento: "1879/03/14",
    dataFalecimento: "1955/04/18",
    paisOrigem: "Alemanha",
    profissao: "Físico teórico",
    contribuicoes: [
      "Teoria da relatividade",
      "E=mc²",
      "Desenvolvimento da mecânica quântica",
    ],
  },
  {
    nome: "Marie",
    sobrenome: "Curie",
    idade: 66,
    dataNascimento: "1867/11/07",
    dataFalecimento: "1934/07/04",
    paisOrigem: "Polônia",
    profissao: "Química e Física",
    contribuicoes: [
      "Descoberta do rádio",
      "Descoberta do polônio",
      "Primeira mulher a ganhar um Prêmio Nobel",
    ],
  },
  {
    nome: "Nelson",
    sobrenome: "Mandela",
    idade: 95,
    dataNascimento: "1918/07/18",
    dataFalecimento: "2013/12/05",
    paisOrigem: "África do Sul",
    profissao: "Advogado e Ativista",
    contribuicoes: [
      "Luta contra o apartheid",
      "Primeiro presidente negro da África do Sul",
      "Prêmio Nobel da Paz",
    ],
  },
  {
    nome: "Leonardo",
    sobrenome: "da Vinci",
    idade: 67,
    dataNascimento: "1452/04/15",
    dataFalecimento: "1519/05/02",
    paisOrigem: "Itália",
    profissao: "Artista e Inventor",
    contribuicoes: [
      "Pintura de 'Mona Lisa'",
      "Estudos em anatomia",
      "Invenções e projetos de engenharia",
    ],
  },
  {
    nome: "Mahatma",
    sobrenome: "Gandhi",
    idade: 78,
    dataNascimento: "1869/10/02",
    dataFalecimento: "1948/01/30",
    paisOrigem: "Índia",
    profissao: "Líder Político e Espiritual",
    contribuicoes: [
      "Movimento de independência da Índia",
      "Filosofia da não-violência",
      "Defesa dos direitos civis",
    ],
  },
  {
    nome: "Isaac",
    sobrenome: "Newton",
    idade: 84,
    dataNascimento: "1643/01/04",
    dataFalecimento: "1727/03/31",
    paisOrigem: "Inglaterra",
    profissao: "Matemático e Físico",
    contribuicoes: [
      "Leis do movimento",
      "Lei da gravitação universal",
      "Cálculo diferencial e integral",
    ],
  },
  {
    nome: "Frida",
    sobrenome: "Kahlo",
    idade: 47,
    dataNascimento: "1907/07/06",
    dataFalecimento: "1954/07/13",
    paisOrigem: "México",
    profissao: "Artista",
    contribuicoes: [
      "Pinturas autobiográficas",
      "Ícone do feminismo",
      "Uso da arte para abordar temas sociais",
    ],
  },
  {
    nome: "Winston",
    sobrenome: "Churchill",
    idade: 90,
    dataNascimento: "1874/11/30",
    dataFalecimento: "1965/01/24",
    paisOrigem: "Inglaterra",
    profissao: "Político e Escritor",
    contribuicoes: [
      "Liderança durante a Segunda Guerra Mundial",
      "Prêmios Nobel de Literatura",
      "Discursos inspiradores",
    ],
  },
  {
    nome: "Rosa",
    sobrenome: "Parks",
    idade: 92,
    dataNascimento: "1913/02/04",
    dataFalecimento: "2005/10/24",
    paisOrigem: "Estados Unidos",
    profissao: "Ativista dos Direitos Civis",
    contribuicoes: [
      "Ação de desobediência civil",
      "Símbolo do movimento dos direitos civis",
      "Autora e ativista",
    ],
  },
  {
    nome: "George",
    sobrenome: "Washington",
    idade: 67,
    dataNascimento: "1732/02/22",
    dataFalecimento: "1799/12/14",
    paisOrigem: "Estados Unidos",
    profissao: "General e Político",
    contribuicoes: [
      "Primeiro presidente dos EUA",
      "Comandante do Exército Continental",
      "Contribuição na redação da Constituição",
    ],
  },
  {
    nome: "César",
    sobrenome: "Chávez",
    idade: 66,
    dataNascimento: "1927/03/31",
    dataFalecimento: "1993/04/23",
    paisOrigem: "Estados Unidos",
    profissao: "Ativista e Líder Sindical",
    contribuicoes: [
      "Fundação da United Farm Workers",
      "Luta pelos direitos dos trabalhadores",
      "Ações de desobediência civil",
    ],
  },
  {
    nome: "Cleópatra",
    sobrenome: "VII",
    idade: 39,
    dataNascimento: "0069/01/01",
    dataFalecimento: "0030/01/01",
    paisOrigem: "Egito",
    profissao: "Rainha",
    contribuicoes: [
      "Última rainha do Egito",
      "Alianças políticas com Roma",
      "Promotora da cultura egípcia",
    ],
  },
  {
    nome: "Martin",
    sobrenome: "Luther King Jr.",
    idade: 39,
    dataNascimento: "1929/01/15",
    dataFalecimento: "1968/04/04",
    paisOrigem: "Estados Unidos",
    profissao: "Pastor e Ativista",
    contribuicoes: [
      "Liderança no movimento dos direitos civis",
      "Discurso 'I Have a Dream'",
      "Prêmio Nobel da Paz",
    ],
  },
  {
    nome: "Malala",
    sobrenome: "Yousafzai",
    idade: 27,
    dataNascimento: "1997/07/12",
    dataFalecimento: null,
    paisOrigem: "Paquistão",
    profissao: "Ativista",
    contribuicoes: [
      "Ativismo pela educação de meninas",
      "Prêmio Nobel da Paz",
      "Autora de 'Eu sou Malala'",
    ],
  },
  {
    nome: "Vincenzo",
    sobrenome: "Bellini",
    idade: 33,
    dataNascimento: "1801/11/03",
    dataFalecimento: "1835/09/23",
    paisOrigem: "Itália",
    profissao: "Compositor",
    contribuicoes: [
      "Óperas como 'Norma' e 'La sonnambula'",
      "Desenvolvimento da ópera romântica",
      "Influência na música clássica",
    ],
  },
  {
    nome: "Simone",
    sobrenome: "de Beauvoir",
    idade: 78,
    dataNascimento: "1908/01/09",
    dataFalecimento: "1986/04/14",
    paisOrigem: "França",
    profissao: "Filósofa e Escritora",
    contribuicoes: [
      "Obra 'O Segundo Sexo'",
      "Pioneira do feminismo moderno",
      "Filosofia existencialista",
    ],
  },
  {
    nome: "Vincent",
    sobrenome: "van Gogh",
    idade: 37,
    dataNascimento: "1853/03/30",
    dataFalecimento: "1890/07/29",
    paisOrigem: "Países Baixos",
    profissao: "Pintor",
    contribuicoes: [
      "Estilo pós-impressionista",
      "Obras como 'Noite Estrelada'",
      "Influência na arte moderna",
    ],
  },
  {
    nome: "Stephen",
    sobrenome: "Hawking",
    idade: 76,
    dataNascimento: "1942/01/08",
    dataFalecimento: "2018/03/14",
    paisOrigem: "Inglaterra",
    profissao: "Físico teórico",
    contribuicoes: [
      "Teoria dos buracos negros",
      "Obra 'Uma Breve História do Tempo'",
      "Contribuições à física teórica",
    ],
  },
  {
    nome: "Alexander",
    sobrenome: "Graham Bell",
    idade: 75,
    dataNascimento: "1847/03/03",
    dataFalecimento: "1922/08/02",
    paisOrigem: "Escócia",
    profissao: "Inventor",
    contribuicoes: [
      "Invenção do telefone",
      "Fundação da AT&T",
      "Pesquisas em comunicação",
    ],
  },
  {
    nome: "Coco",
    sobrenome: "Chanel",
    idade: 87,
    dataNascimento: "1883/08/19",
    dataFalecimento: "1971/01/10",
    paisOrigem: "França",
    profissao: "Designer de Moda",
    contribuicoes: [
      "Revolução na moda feminina",
      "Criação do perfume Chanel No. 5",
      "Estilo 'chic' e atemporal",
    ],
  },
];

console.log("Questão 01:");

const nomesESobrenomes = figurasHistoricas.map(figura => `${figura.nome} ${figura.sobrenome}`);
console.log(nomesESobrenomes)



console.log("Questão 02:");

const setentaMais = [];
figurasHistoricas.filter((figura) => {
  if(figura.idade >= 70){
    setentaMais.push(`${figura.nome} ${figura.sobrenome}`);
  }
});
console.log(setentaMais);



console.log("Questão 03:");

let acum = 0;
let cont = 0;
figurasHistoricas.forEach((figura) => {
  acum += figura.idade;
  cont++;
})
const mediaIdade = acum / cont;
console.log(mediaIdade);



console.log("Questão 04:");

const paisPredicado = (figura) => figura.paisOrigem === "Estados Unidos" || figura.paisOrigem === "Inglaterra";
const figurasInglesasEEstadunidenses = figurasHistoricas.filter(paisPredicado)
    .map(figura => `${figura.nome} ${figura.sobrenome}`);
console.log(figurasInglesasEEstadunidenses);



console.log("Questão 05:");

acum = 0;
cont = 0;
figurasHistoricas.filter(figura => figura.profissao.toLowerCase().includes("ativista"))
    .forEach((figura) => {
      acum += figura.idade;
      cont++;
    });
const mediaIdadeAtivistas = acum / cont;
console.log(mediaIdadeAtivistas);



console.log("Questão 06:")

cont = 0;
figurasHistoricas.filter(figura => {
  if(figura.dataNascimento.split("/")[1] === "06"){
    cont++;
  }
})

console.log(cont)



console.log("Questão 07:")

const nullPredicado = (figura) => figura.dataNascimento !== null && figura.dataFalecimento !== null;
const falecidosPredicado = (figura) => figura.dataNascimento.split("/")[1] === figura.dataFalecimento.split("/")[1];
const nascidosFalecidosMesmoMes = figurasHistoricas.filter(nullPredicado)
    .filter(falecidosPredicado)
    .map(figura => `${figura.nome} ${figura.sobrenome}`);

console.log(nascidosFalecidosMesmoMes);



console.log("Questão 08:")

const todasContribuicoes = figurasHistoricas.map(figura => figura.contribuicoes)
    .flat();

console.log(todasContribuicoes);



console.log("Questão 09:")

const fisicosPredicado = (figura) => figura.profissao.toLowerCase().includes("físic");
const contribuicoesFisicos = figurasHistoricas.filter(fisicosPredicado)
    .map(figura => figura.contribuicoes)
    .flat();

console.log(contribuicoesFisicos);



console.log("Questão 10:")

let totalCaracteres = 0;
figurasHistoricas.forEach(figura => {
  totalCaracteres += figura.nome.length
})

console.log(totalCaracteres);



console.log("Questão 11:")

const figurasPorPais = {};
figurasHistoricas.reduce((figurasPorPais, figuraHistorica) => {
  const paisOrigem = figuraHistorica.paisOrigem;
  if(figurasPorPais[paisOrigem] === undefined){
    figurasPorPais[paisOrigem] = [`${figuraHistorica.nome} ${figuraHistorica.sobrenome}`];
  } else {
    figurasPorPais[paisOrigem].push(`${figuraHistorica.nome} ${figuraHistorica.sobrenome}`);
  }
  return figurasPorPais;
}, figurasPorPais);

console.log(figurasPorPais);



console.log("Questão 12:")
let numA = 0;
let numB = 1;
let numeroAtual = 0;
cont = 1;
while(cont < 20){
  numeroAtual = numA + numB;
  cont++;
  [numA, numB] = [numB, numeroAtual];
}
console.log(`O ${cont}ª número da sequência Fibonacci é ${numeroAtual}`);



console.log("Questão 13:")

function fatorial(n){
  let proximo = n - 1;
  while(proximo >= 1){
    n *= proximo;
    proximo--;
  }
  return n;
}

let n = Number(prompt("Digite um número para calcular o fatorial:"));
console.log(fatorial(n));



console.log("Questão 14:")

function ordemDecrescente(maior, meio, menor){
  if(meio > maior){
    [maior, meio] = [meio, maior];
  }
  if(menor > maior){
    [maior, menor] = [menor, maior];
  }
  if(meio < menor){
    [meio, menor] = [menor, meio];
  }

  return `${maior} ${meio} ${menor}`;
}
const num1 = Number(prompt("Digite o primeiro número:"));
const num2 = Number(prompt("Digite o segundo número:"));
const num3 = Number(prompt("Digite o terceiro número:"));

console.log(ordemDecrescente(num1, num2, num3));



console.log("Questão 15:")

function fatorialSimples(n){
  if(n === 1){
    return n;
  }
  return n * fatorialSimples(n - 1);
}

const num = Number(prompt("Digite um número para calcular o fatorial:"));
document.write(
    `<p>O fatorial de ${num} é ${fatorialSimples(num)}</p>`
);



console.log("Questão 16:");

function sqrtArray(arr){
  return arr.map(num => Math.sqrt(num).toFixed(3)).map(num => Number(num));
}

const priNum = Number(prompt("Digite o primeiro número:"));
const segNum = Number(prompt("Digite o segundo número:"));
const terNum = Number(prompt("Digite o terceiro número:"));
const quaNum = Number(prompt("Digite o quarto número:"));
const quiNum = Number(prompt("Digite o quinto número:"));

const arr = [priNum, segNum, terNum, quaNum, quiNum];
const sqrtArr = sqrtArray(arr);

console.log(sqrtArr);