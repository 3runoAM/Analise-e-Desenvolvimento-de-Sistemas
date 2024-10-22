const movieList = ["LongLegs", "Senhor dos Anéis", "Duna: Parte II", "Matrix", "Ghost in the Shell", "De Volta para o Futuro", "The Substance"];

let count = 0;
for(let movie of movieList){
    count++;
}

console.log(`A lista possui ${count} filmes;`);
movieList.push("Blader Runner");
count++
console.log(`A lista possui ${count} filmes;`);
movieList.push("Hurricane Bianca");
count++
console.log(`A lista possui ${count} filmes;`);
movieList.push("Pânico na Floresta");
count++
console.log(`A lista possui ${count} filmes;`);