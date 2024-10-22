const movieList = ["LongLegs", "Senhor dos Anéis", "Duna: Parte II", "Matrix", "Ghost in the Shell", "De Volta para o Futuro", "The Substance"];

const matrixIndex = movieList.indexOf("Matrix");

movieList.splice(matrixIndex, 1);

const LOTRIndex = movieList.indexOf("Senhor dos Anéis");

movieList.splice(LOTRIndex, 1,  `Senhor dos Anéis: A Sociedade do Anel`, `Senhor dos Anéis: As Duas Torres`, `Senhor dos Anéis: O Retorno do Rei`);