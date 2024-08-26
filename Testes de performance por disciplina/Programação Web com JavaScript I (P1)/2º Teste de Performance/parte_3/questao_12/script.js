let sideA = Number(prompt("Tamanho do lado A: "));
let sideB = Number(prompt("Tamanho do lado B: "));
let sideC = Number(prompt("Tamanho do lado C: "));

console.log(defineTriangle(sideA, sideB, sideC));

function isTypeCorrect(sideA, sideB, sideC) {
    return isNaN(sideA) || isNaN(sideB) || isNaN(sideC);
}

function isAnySideZero(sideA, sideB, sideC){
    return sideA <= 0 || sideB <= 0 || sideC <= 0;
}

function defineTriangle(sideA, sideB, sideC) {
    if(isTypeCorrect(sideA, sideB, sideC)) {
        return "Apenas números devem ser inseridos";
    }
    if(isAnySideZero(sideA, sideB, sideC)) {
        return "0 não é um valor válido";
    }

    if(sideA !== sideB && sideB !== sideC && sideA !== sideC) {
        return "Triângulo Escaleno";
    } else if(sideA === sideB && sideB === sideC && sideA === sideC) {
        return "Triângulo Equilátero";
    } else {
        return "Triângulo Isósceles";
    }
}