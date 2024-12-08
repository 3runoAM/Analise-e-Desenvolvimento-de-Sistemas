const tuplas = [ [3, 5], [7, 1], [6, 8], [4, 9], [2, 3], [8, 1], [5, 7], [9, 6], [1, 4], [2, 8] ];


const predicateA = (tupla) => tupla[0] % 2 === 0 && tupla[1] % 2 !== 0;
const predicateB = (tupla) => tupla[0] % 2 !== 0 && tupla[1] % 2 === 0;

const somaDeTuplasMistas = tuplas.filter(tupla => predicateA(tupla) || predicateB(tupla))
    .flatMap((tupla => tupla[0] + tupla[1]));

console.log(somaDeTuplasMistas);