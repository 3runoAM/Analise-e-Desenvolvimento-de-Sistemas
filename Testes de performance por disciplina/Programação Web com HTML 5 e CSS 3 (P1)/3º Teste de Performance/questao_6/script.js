let primeiraCor = prompt("Digite a primeira cor: ").toLowerCase();
let segundaCor = prompt("Digite a segunda cor: ").toLowerCase();

if(primeiraCor === "amarelo" && segundaCor === "laranja"){
    alert("Vermelho");
} else if(primeiraCor === "vermelho" && segundaCor === "amarelo"){
    alert("Laranja");
} else if(primeiraCor === "azul" && segundaCor === "vermelho"){
    alert("Roxo");
} else if(primeiraCor === "amarelo" && segundaCor === "azul"){
    alert("Verde");
} else if(primeiraCor === "amarelo" && segundaCor === "verde"){
    alert("Azul");
} else if(primeiraCor === "branco" && segundaCor === "preto") {
    alert("Cinza");
} else if(primeiraCor === "vermelho" && segundaCor === "branco") {
    alert("Rosa");
} else if(primeiraCor === "vermelho" && segundaCor === "verde") {
    alert("Marrom");
} else if(primeiraCor === "laranja" && segundaCor === "roxo") {
    alert("Marrom terra");
} else if(primeiraCor === "roxo" && segundaCor === "branco") {
    alert("roxo");
}