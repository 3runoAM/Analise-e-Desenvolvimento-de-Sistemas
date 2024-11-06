const frase = "the only thing necessary for the triumph of evil is for good men to do nothing";

const fraseArray = frase.split(" ");

let newPhrase = "";
for(let i in fraseArray){
    let word = fraseArray[i];

    word = word.split("")[0].toUpperCase() + word.slice(1);

    newPhrase += word + " ";
}

console.log(newPhrase);
