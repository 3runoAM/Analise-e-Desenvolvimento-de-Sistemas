// O comparador de igualdade simples compara se um valor é igual ao outro, sem levar em consideração o tipo
let num10 = 10;
let string10 = '10';

console.log(num10 == string10); // Mostra true no console, já que temos o mesmo valor (10) em tipos diferentes

// O comparador de igualdade restrita compara valor e tipo

console.log(num10 === string10); // Mostra false no console, porque Number e String são tipos diferentes, apesar de terem o mesmo valor (10)