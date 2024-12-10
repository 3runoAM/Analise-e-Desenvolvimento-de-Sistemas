const validCPFPattern = /[0-9]{3}[\.][0-9]{3}[\.][0-9]{3}[-][0-9]{2}?/;

const validExampleA = validateCPF('123.456.789-09', validCPFPattern);
console.log(validExampleA);

const invalidExampleA = validateCPF('123.456.789-0', validCPFPattern);
console.log(invalidExampleA);

const invalidExampleB = validateCPF('09876543210', validCPFPattern);
console.log(invalidExampleB);

const invalidExampleC = validateCPF('098,7654,3210', validCPFPattern);
console.log(invalidExampleC);

const invalidExampleD = validateCPF('098.7654.3210', validCPFPattern);
console.log(invalidExampleD);

function validateCPF(cpf, validCPFPattern) {
    return validCPFPattern.test(cpf);
}