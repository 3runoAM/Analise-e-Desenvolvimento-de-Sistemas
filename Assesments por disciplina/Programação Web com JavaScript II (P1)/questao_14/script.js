class InvalidCPFError extends Error {
    constructor(cpf){
        super('CPF inválido ' + cpf);
    }
}

function validateCPF(cpf, validCPFPattern) {
    return validCPFPattern.test(cpf);
}

function checkCPF(cpf, validCPFPattern) {
    const isValidCPF = validateCPF(cpf, validCPFPattern);
    if(!isValidCPF) throw new InvalidCPFError(cpf);
    return 'CPF válido ' + cpf;
}

const userCPF = prompt('Digite seu CPF: ');
const validCPFPattern = /[0-9]{3}[\.][0-9]{3}[\.][0-9]{3}[-][0-9]{2}?/;

console.log(checkCPF(userCPF, validCPFPattern));