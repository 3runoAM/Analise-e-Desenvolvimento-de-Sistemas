let camiseta = prompt("Qual a cor da camiseta?").toLowerCase();
let calca = prompt("Qual a cor da calça?").toLowerCase();

if (camiseta === "vermelha" && calca === "amarela") {
    alert("Ketchup e mostarda!");
} else if(camiseta === "amarela" && calca === "preta"){
    alert("Agora você é uma abelha!");
} else if(camiseta === "branca" && calca === "jeans"){
    alert("Look clássico! Não tem como errar!");
} else {
    alert("Hmm, nada a comentar...!");
}