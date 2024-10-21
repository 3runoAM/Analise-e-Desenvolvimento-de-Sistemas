function Prefeito(nome, idade){
    this.nome = nome;
    this.idade = idade;
}

function Cidade(nome, anoFundacao,prefeito){
    this.nome = nome;
    this.anoFundacao = anoFundacao;
    this.prefeito = prefeito;
}

const prefeito = new Prefeito("Pedro Vasconselis", 56)

const cidade = new Cidade("Estrela Cadente", 1993, prefeito);

console.log(cidade);