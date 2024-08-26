let dinheiroQueRecebi = Number(prompt("Qual a quantia de pagamento?"));
let valorDoProduto = Number(prompt("Qual o valor do produto?"));

calculateChange(valorDoProduto, dinheiroQueRecebi);

function isTypeCorrect(productValue, paidValue) {
    return isNaN(productValue) || isNaN(paidValue);
}

function isAmountSufficient(productValue, paidValue) {
    return paidValue < productValue;
}

function calculateChange(productValue, paidValue) {
    if(isTypeCorrect(productValue, paidValue)) {
        console.log(`Apenas números devem ser inseridos`)
        return;
    }
    if (isAmountSufficient(productValue, paidValue)) {
        console.log(`Valor insuficiente.`)
        return;
    }

    let change = paidValue - productValue;
    console.log(`O troco: R$${change.toFixed(2)}`);
    console.log(`O troco arredondado para cima: R$${Math.ceil(change)}`);
    console.log(`O troco arredondado para baixo: R$${Math.floor(change)}`);
}