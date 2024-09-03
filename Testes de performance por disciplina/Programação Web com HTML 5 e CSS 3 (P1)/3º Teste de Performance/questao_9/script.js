let number = Number(prompt('Digite um número:'));

console.log(evenOrOdd(number));

function isTypeCorrect(number) {
    return isNaN(number);
}

function evenOrOdd(number) {
    if(isTypeCorrect(number)){
        return 'O valor informado não é um número';
    } else if(number === 0) {
        return 'zero';
    }
    return number % 2 === 0 ? 'par' : 'ímpar';
}