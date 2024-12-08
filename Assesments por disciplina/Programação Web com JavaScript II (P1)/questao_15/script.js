class InvalidCPFError extends Error {
    constructor(cpf){
        super(`CPF inválido: ${cpf}`);
    }
}

function calculateValidationDigit(firstNineCPFNumbers, multiplier){
    return firstNineCPFNumbers.reduce((accum, currentValue) => {
        accum += currentValue * multiplier;
        multiplier++;
        return accum;
    }, 0);
}

function fixDigit(digit) {
    const division = digit % 11;
    return division % 11 >= 10 ? 0 : division;
}

function validateCPF(cpf, validCPFPattern) {
    const validPattern = validCPFPattern.test(cpf);
    if(!validPattern) throw new InvalidCPFError(cpf);

    const firstNineCPFNumbers = cpf.slice(0, 11)
        .split('.')
        .map(string => string.split(''))
        .flat()
        .map(Number);

    let multiplier = 1;
    const firstDigitCalcResult = calculateValidationDigit(firstNineCPFNumbers, multiplier);
    const firstValidationDigit = fixDigit(firstDigitCalcResult);

    firstNineCPFNumbers.push(firstValidationDigit);

    multiplier = 0;
    const secondDigitCalcResult = calculateValidationDigit(firstNineCPFNumbers, multiplier);
    const secondDigit = fixDigit(secondDigitCalcResult);

    firstNineCPFNumbers.push(secondDigit);

    const validCpf = firstNineCPFNumbers.join('');
    const enteredCpf = cpf.slice(0, 14).split('.').join('').replace('-', '');

    if(enteredCpf === validCpf) return true;
    throw new InvalidCPFError(cpf);
}

const validCPFPattern = /[0-9]{3}[\.][0-9]{3}[\.][0-9]{3}[-][0-9]{2}?/;

try {
    const cpfA = '482.700.030-18';
    validateCPF(cpfA, validCPFPattern);
    console.log('CPF Válido: ' + cpfA);

    const cpfB = '756.581.480-65';
    validateCPF(cpfB, validCPFPattern);
    console.log('CPF Válido: ' + cpfB);

    const cpfC = '09876543210';
    validateCPF(cpfC, validCPFPattern);
    console.log('CPF Válido: ' + cpfC);
} catch (InvalidCPFError) {
    console.log(InvalidCPFError.message);
}