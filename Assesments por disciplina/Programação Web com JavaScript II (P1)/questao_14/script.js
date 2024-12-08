class InvalidCPFError extends Error {
    constructor(){
        super('CPF inválido');
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
    return division % 11 === 10 ? 0 : division;
}

function validateCPF(cpf, validCPFPattern) {
    const validPattern = validCPFPattern.test(cpf);
    if(!validPattern) throw new InvalidCPFError();

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
    throw new InvalidCPFError('CPF inválido');
}

const validCPFPattern = /[0-9]{3}[\.][0-9]{3}[\.][0-9]{3}[-][0-9]{2}?/;

const validExampleA = validateCPF('482.700.030-18', validCPFPattern);
console.log(validExampleA);

const validExampleB = validateCPF('756.581.480-65', validCPFPattern);
console.log(validExampleB);

const invalidExampleA = validateCPF('09876543210', validCPFPattern);
console.log(invalidExampleA);

const invalidExampleB = validateCPF('098,7654,3210', validCPFPattern);
console.log(invalidExampleB);

const invalidExampleC = validateCPF('098.7654.3210', validCPFPattern);
console.log(invalidExampleC);