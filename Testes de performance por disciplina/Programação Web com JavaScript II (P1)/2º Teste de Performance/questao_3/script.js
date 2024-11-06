const numerosA = [1, 2, 3];
const numerosB = [4, 5, 6];
const numerosC = [7, 8, 9];

const allNumbers = numerosA.concat(numerosB, numerosC);

let sumOArrays = calculateSum(allNumbers);

console.log(sumOArrays);

function calculateSum(numbers) {
    let acum = 0;
    for(let i = 0; i < numbers.length; i++){
        acum += numbers[i];
    }
    return acum;
}