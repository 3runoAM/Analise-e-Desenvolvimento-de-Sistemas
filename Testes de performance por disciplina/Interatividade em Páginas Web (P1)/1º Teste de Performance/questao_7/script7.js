const nome = "Rio Branco";
const anoDeFundacao = 1998;

const colegio = {
    nome,
    anoDeFundacao,
}

colegio.nomeDoDiretor = "Neto";
colegio.numeroDeAlunos = 265;
colegio.telefone = "8334212869"

colegio.obterDiretor = function(){
    return this.nomeDoDiretor;
}

delete colegio.anoDeFundacao;