let numeros = [ 3, 1, 2, 5 ];

const numberMatrix = [];
for(let num of numeros){
    const currentRow = [];
    for(let i = 1; i <= num; i++){
        currentRow.push(i);
    }
    numberMatrix.push(currentRow);
}

console.log(numberMatrix);