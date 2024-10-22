const movieList = ["LongLegs", "Senhor dos Anéis", "Duna: Parte II", "Matrix", "Ghost in the Shell", "De Volta para o Futuro", "The Substance"];

const halfOfTheList = prompt("Primeira ou segunda metade do vetor? (Respostas válidas: “primeira” e “segunda”)").toLowerCase();
const quantityOfMovies = Number(prompt("Quantos filmes? (Respostas válidas: números entre 1 e 3)"));

console.log(findRandomMovie(movieList, halfOfTheList, quantityOfMovies))

function findRandomMovie(movieList, halfOfTheList, quantity) {
    if(halfOfTheList !== "primeira" && halfOfTheList !== "segunda") {
        return "Metade inválida";
    }
    if(isNaN(quantity) || quantityOfMovies < 1 || quantityOfMovies > 3) {
        return "Quantidade inválida";
    }

    const listIndexes = movieList.length - 1;
    const middleListIndex = listIndexes / 2;

    const start = halfOfTheList === "primeira" ? 0 : middleListIndex;
    const end = start === 0 ? middleListIndex : listIndexes;

    const randomMovies = [];
    for(let i = 1; i <= quantity; i++) {
        randomMovies[i-1] = movieList.at(Math.round((Math.random() * (end - start) + start)));
    }

    return randomMovies;
}