const movieList = ["LongLegs", "Senhor dos Anéis", "Duna: Parte II", "Matrix", "Ghost in the Shell", "De Volta para o Futuro", "The Substance"];

const BTTFIndex = movieList.indexOf("De Volta para o Futuro");

movieList.splice(BTTFIndex -1, 3);

console.log(movieList);