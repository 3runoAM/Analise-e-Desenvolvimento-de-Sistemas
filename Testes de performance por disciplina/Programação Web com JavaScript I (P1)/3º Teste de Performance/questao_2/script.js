let age = Number(prompt("Digite sua idade: "));

greetUser(age);

function isCorrectType(age){
    return isNaN(age);
}

function greetUser(age){
    if(isCorrectType(age)){
        alert("Apenas números devem ser inseridos.");
    }else if(age < 18){
        alert("Olá jovem!");
    } else{
        alert("Olá adulto!");
    }
}