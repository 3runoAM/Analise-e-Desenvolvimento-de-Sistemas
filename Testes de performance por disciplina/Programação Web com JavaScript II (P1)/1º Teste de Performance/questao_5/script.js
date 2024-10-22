const movieList = ["LongLegs", "Senhor dos Anéis", "Duna: Parte II", "Matrix", "Ghost in the Shell", "De Volta para o Futuro", "The Substance"];

movieList.splice(4, 0, "Uma sexta-feira muito louca", "Sexta-feira da paixão", "Sexta-feira 13");

console.log(movieList);

movieList.splice(8, 0, "Duna: Parte I", "Duna: Messia");

console.log(movieList);