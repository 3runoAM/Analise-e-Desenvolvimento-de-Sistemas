let firstNumber = 0;
let secondNumber = 1;
const fibonacci = [firstNumber, secondNumber];

let thirdNumber;
while(thirdNumber !== 55){
    thirdNumber = firstNumber + secondNumber;
    fibonacci.push(thirdNumber);
    firstNumber = secondNumber;
    secondNumber = thirdNumber;
}