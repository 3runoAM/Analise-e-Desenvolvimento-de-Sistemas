const height = Number(prompt('Digite a altura: '));
const weight = Number(prompt('Digite o peso: '));

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
  return weight / Math.pow(height, 2);
}

function classifyIMC(imc) {
    if (imc <= 24.99) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 29.99) {
        return 'Pre-sobrepeso';
    } else if (imc >= 30 && imc < 34.9) {
        return 'Obesidade grau 1';
    } else if (imc >= 35 && imc < 39.9) {
        return 'Obesidade grau 2';
    } else {
        return 'Obesidade grau 3';
    }
}