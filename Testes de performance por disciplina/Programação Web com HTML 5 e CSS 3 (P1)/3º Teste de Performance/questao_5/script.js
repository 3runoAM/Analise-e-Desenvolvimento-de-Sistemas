let number = Number(prompt("Digite um número entre 0-9: "));

showWrittenNumber(number);

function isTypeCorrect(number){
    return isNaN(number);
}

function showWrittenNumber(number){
    if (isTypeCorrect(number)){
        alert("Apenas números devem ser inseridos");
        return;
    }
    switch(number){
        case 0:
            alert("Zero");
            break;
        case 1:
            alert("Um");
            break;
        case 2:
            alert("Dois");
            break;
        case 3:
            alert("Três");
            break;
        case 4:
            alert("Quatro");
            break;
        case 5:
            alert("Cinco");
            break;
        case 6:
            alert("Seis");
            break;
        case 7:
            alert("Sete");
            break;
        case 8:
            alert("Oito");
            break;
        case 9:
            alert("Nove");
            break;
        default:
            alert("Número desconhecido");
            break;
    }
}