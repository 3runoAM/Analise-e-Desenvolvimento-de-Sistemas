function Carro(ano, modelo) {
    this.ano = ano;
    this.modelo = modelo;
    this.acelerar = () => {
        alert("Acelerando!");
        console.log("Acelerando!");
    }
}

const relampagoMarquinhos = new Carro(1968, "Fusca");
relampagoMarquinhos.acelerar();
