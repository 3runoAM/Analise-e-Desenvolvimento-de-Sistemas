const height = Number(prompt('Digite a altura (m): '));
const weight = Number(prompt('Digite o peso (kg): '));

alert(imc(height, weight));

function imc(height, weight) {
    if (isNaN(height) || isNaN(weight) ||  height <= 0 || weight <= 0) {
        return 'Altura e peso devem ser maiores que 0';
    }
    const imc = calculateIMC(weight, height);
    const classification = classifyIMC(imc);

    return `Seu IMC é de ${imc.toFixed(2)} e é classificado como ${classification}`;
}

function calculateIMC(weight, height) {
  return weight / (height * height);
}

function classifyIMC(imc) {
    if (imc < 16) {
        return 'Baixo peso (grau I)';
    } else if (imc >= 16 && imc < 16.9) {
        return 'Baixo peso (grau II)';
    } else if (imc >= 17 && imc < 18.49) {
        return 'Baixo peso (grau III)';
    } else if (imc >= 18.5 && imc < 24.99) {
        return 'Peso adequado';
    } else if (imc >= 25 && imc < 29.99) {
        return 'Sobrepeso';
    } else if (imc >= 30 && imc < 34.9) {
        return 'Obesidade (grau I)';
    } else if (imc >= 35 && imc < 39.9) {
        return 'Obesidade (grau II)';
    } else {
        return 'Obesidade (grau III)';
    }
}