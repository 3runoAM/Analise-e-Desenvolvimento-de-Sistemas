let numeroInicio = Number(prompt("Digite o número inicial: "))
let numeroFim = Number(prompt("Digite o número final: "))

console.log(pickRandomBetweenNumber(numeroInicio, numeroFim))

function isTypeCorrect(numA, numB) {
    return isNaN(numA) || isNaN(numB);
}

function pickRandomBetweenNumber(min, max) {
    if(isTypeCorrect(min, max)){
        return "Apenas números devem ser inseridos";
    }
    return Math.floor(Math.random() * (max - min + 1) + min);
}