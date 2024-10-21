// const raioDoCirculo = prompt("Entre o raio do círculo: ");

function Circulo(raio){
    this.raio = raio;
    this.calcularArea = function(){
        return Math.PI * raio * raio;
    }
    this.calcularCircunferencia = function(){
        return Math.PI * raio * 2;
    }
}

const circle = new Circulo(10);

console.log(circle.calcularArea());
console.log(circle.calcularCircunferencia());