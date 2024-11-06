const firstValue = prompt('Digite o primeiro valor: ');
const secondValue = prompt('Digite o segundo valor: ');
const thirdValue = prompt('Digite o terceiro valor: ');

const sumThreeValues = (firstValue, secondValue, thirdValue) => {
  return firstValue + secondValue + thirdValue;
}

console.log(sumThreeValues(firstValue, secondValue, thirdValue));