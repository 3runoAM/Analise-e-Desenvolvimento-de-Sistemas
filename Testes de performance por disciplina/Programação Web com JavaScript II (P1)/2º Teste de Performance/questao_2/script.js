let algunsNumeros = [
  1, 2, 3, 5, 7, 8, 9, 13, 17, 20, 21, 303, 1001, 1002, 1003,
];

algunsNumeros = removeNonPrimes(algunsNumeros);
console.log(algunsNumeros);


function removeNonPrimes(numbers) {
  let arrayCopy = numbers.slice()

  let i = 0;
  while(i <= arrayCopy.length) {
    const currentNumber = arrayCopy[i];

    if(!isPrime(currentNumber)) {
      const numberIndex = numbers.indexOf(currentNumber);
      numbers.splice(numberIndex, 1);
    }

    i++;
  }

  return numbers;
}

function isPrime(number) {
  if(number < 2) {
    return false;
  }

  const sqrt = Math.round(Math.sqrt(number));
  for(let i = 2; i <= sqrt; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}