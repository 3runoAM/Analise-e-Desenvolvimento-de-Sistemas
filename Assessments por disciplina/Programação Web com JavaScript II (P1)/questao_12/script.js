let frase = "toda ciencia seria superflua se houvesse coincidencia imediata entre a aparencia e a essencia das coisas";
const vogais = ['a', 'e', 'i', 'o', 'u'];

let novaFrase = ''
frase = frase.split('')
    .map((letra) => {
        if (!vogais.includes(letra)) {
            novaFrase += letra;
        }
    });

console.log(novaFrase);