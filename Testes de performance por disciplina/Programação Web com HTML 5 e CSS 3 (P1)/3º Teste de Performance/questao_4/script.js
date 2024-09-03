let fruit = prompt("Digite uma fruta (Laranja, Maçã ou Banana): ").toLowerCase();

if(fruit === "laranja"){
    alert("Não esqueça de descascar!");
} else if(fruit === "maça" || fruit === "maçã"){
    alert("Se você tirar a casca perderá as vitaminas!");
} else if(fruit === "banana"){
    alert("Já vem naturalmente embalada e pronta para o consumo!");
} else{
    alert("Não tenho nada a dizer sobre isso.");
}