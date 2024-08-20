let numA = Number(prompt("Primeiro número: "));
let numB = Number(prompt("Segundo número: "));

calcularSQRT(numA, numB);

function isTypeCorrect(numA, numB) {
    return isNaN(numA) || isNaN(numB) || numA < 0 || numB < 0;
}

function calcularSQRT(numA, numB) {
    if(isTypeCorrect(numA, numB)) {
        alert("Apenas números devem ser inseridos.");
        return;
    }
    numA = Math.floor(numA)
    numB = Math.floor(numB)

    let potenciaA = numA ** 2;
    let potenciaB = numB ** 3;

    alert(Math.sqrt(potenciaA + potenciaB).toFixed(2));
}