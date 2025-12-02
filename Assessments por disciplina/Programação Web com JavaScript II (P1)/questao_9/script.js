let numeros = [1, [7, 2, [1, 2, 3, [4, [5, [4, 2, 6, [7, [8, [1, 2, 3, 9, [1, 10]]]]]]]]]];

console.log(somaNumeros(numeros));

function somaNumeros(numerosEArrays){
    return numerosEArrays.reduce((acumulador, valorAtual) => {
        if(Array.isArray(valorAtual)){
            return acumulador + somaNumeros(valorAtual);
        }
        return acumulador + valorAtual;
    }, 0);
}