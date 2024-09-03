let poderDeLuta = Number(prompt("Qual o poder de luta de Kakarotto?"));

scouter(poderDeLuta);

function isTypeCorrect(number){
    return isNaN(number);
}

function scouter(poderDeLuta){
    if(isNaN(poderDeLuta)){
        alert("Apenas números devem ser inseridos.");
    } else if(poderDeLuta > 8000){
        alert("Isso deve ser um engano, esse aparelho deve estar quebrado!");
    } else {
        alert("Ainda não é o suficiente para derrotar Vegeta!");
    }
}