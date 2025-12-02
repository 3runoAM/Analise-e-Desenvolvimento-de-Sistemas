let onix = new Carro("Chevrolet", "Onix", 2021);
onix.ligar();
onix.mostrarDetalhes();

let hb20 = new Carro("Hyundai", "HB20", 2021);
hb20.ligar();
hb20.mostrarDetalhes();

let gol = new Carro("Volkswagen", "Gol", 2021);
gol.ligar();
gol.mostrarDetalhes();

/**/

function Carro(marca, modelo, ano){
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.mostrarDetalhes = function(){
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`);
    }
    this.ligar = function(){
        console.log("O carro está ligado!");
    }
}