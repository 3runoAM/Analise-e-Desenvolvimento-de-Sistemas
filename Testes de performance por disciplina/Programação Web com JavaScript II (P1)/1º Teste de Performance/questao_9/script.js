const movieList = ["LongLegs", "Senhor dos Anéis", "Duna: Parte II", "Matrix", "Ghost in the Shell", "De Volta para o Futuro", "The Substance"];

const LOTRIndex = movieList.indexOf("Senhor dos Anéis");

const matrixIndex = movieList.indexOf("Matrix");

const moviesBetween = matrixIndex - (LOTRIndex + 1);

movieList.splice(LOTRIndex+1, moviesBetween);