const number = "dez";
const algorism = wordToNumber(number);
console.log(algorism);

function wordToNumber(number) {
    switch (number) {
        case 'zero':
            return 0;
        case 'um':
            return 1;
        case 'dois':
            return 2;
        case 'três':
            return 3;
        case 'quatro':
            return 4;
        case 'cinco':
            return 5;
        case 'seis':
            return 6;
        case 'sete':
            return 7;
        case 'oito':
            return 8;
        case 'nove':
            return 9;
    }
}