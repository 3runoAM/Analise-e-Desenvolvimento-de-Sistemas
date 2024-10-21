function Advogado(nome, horasTrabalhadas, valorHora){
    this.nome = nome;
    this.horasTrabalhadas = horasTrabalhadas;
    this.valorHora = valorHora;

    this.calcularGanho = function(){
        return `R$${Math.round(this.valorHora * this.horasTrabalhadas)}`;
    }
}

const advogado1 = new Advogado("Carlos Pereira", 60, 150);

console.log(advogado1.calcularGanho());