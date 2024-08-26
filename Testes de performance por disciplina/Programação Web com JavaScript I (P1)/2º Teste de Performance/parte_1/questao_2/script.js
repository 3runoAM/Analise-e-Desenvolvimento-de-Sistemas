let numA = Number(prompt("Primeiro número: "));
let numB = Number(prompt("Segundo número: "));

calculateDivision(numA, numB);

function isTypeCorrect(numA, numB) {
    return isNaN(numA) || isNaN(numB);
}

function zeroDivisor(num) {
    return num === 0;
}

function calculateDivision(numA, numB){
    if(isTypeCorrect(numA, numB)){
        alert("Apenas números devem ser inseridos");
        return;
    }
    if(zeroDivisor(numB)){
        alert("Números não podem ser divididos por 0");
        return;
    }
    numA = Math.floor(numA);
    numB = Math.floor(numB);
    alert(`O resultado da divisão é: ${numA / numB}\nO resto da divisão: ${numA % numB}`);
}