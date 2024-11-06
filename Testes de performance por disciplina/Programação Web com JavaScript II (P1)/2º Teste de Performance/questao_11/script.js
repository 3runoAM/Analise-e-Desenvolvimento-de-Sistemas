const stringA = "Ovo";
console.log(ehPalindromo(stringA));

const stringB = "Asa";
console.log(ehPalindromo(stringB));

const stringC = "Radar";
console.log(ehPalindromo(stringC));

/**/

function ehPalindromo(palavra){
    palavra = palavra.toLowerCase().split(" ").join("");
    let indexLetraOposta = -1;
    let tamanhoPalavra = palavra.length;

    for (let i = 0; i < tamanhoPalavra - 1 ; i++) {
        if (palavra[i] !== palavra[tamanhoPalavra + indexLetraOposta]) {
            return false;
        }
        indexLetraOposta -= 1;
    }

    return true;
}