const carro = {
    marca: "Chevrolet",
    modelo: "Onix",
    ano: 2021,
    mostrarDetalhes: function(){
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`);
    },
    ligar: function(){
        console.log("O carro está ligado!");
    }
}

carro.ligar();
carro.mostrarDetalhes();