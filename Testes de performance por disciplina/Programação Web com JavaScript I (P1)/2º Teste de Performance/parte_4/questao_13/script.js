const eightPercent = 0.08;
const fivePercent = 0.05;
const fourPercent = 0.04;
const tenPercent = 0.1;

let purchaseValue = Number(prompt("Valor da compra: "))
let paymentForm = Number(prompt("Forma de pagamento:\n1- á vista\n2- á prazo"))
let paymentMethod = Number(prompt("Método de pagamento:\n1- Débito\n2- Crédito\n3- Dinheiro"));

console.log(calculateFinalPrice(purchaseValue, paymentForm, paymentMethod));

function isTypeCorrect(purchaseValue, paymentForm, paymentMethod) {
    return isNaN(purchaseValue) || isNaN(paymentForm) || isNaN(paymentMethod);
}

function isValidOption(purchaseValue, paymentForm, paymentMethod){
    return paymentForm <= 0 || paymentForm > 2 || paymentMethod <= 0 || paymentMethod > 3 || purchaseValue <= 0;
}

function isValidAmount(installmentsAmount){
    return installmentsAmount <= 0 || isNaN(installmentsAmount);
}

function calculateFinalPrice(purchaseValue, paymentForm, paymentMethod) {
    if(isTypeCorrect(purchaseValue, paymentForm, paymentMethod) || isValidOption(purchaseValue, paymentForm, paymentMethod)) {
        return "Escolha uma opção válida";
    }
    if(paymentForm === 1){ // à vista
        if (paymentMethod === 3){ // 10% no dinheiro
            return `Pagamento de: R$${(purchaseValue - (purchaseValue * tenPercent)).toFixed(2)}`;
        } else if (paymentMethod === 2){ // 5% à no crédito
            return `Pagamento de: R$${(purchaseValue - (purchaseValue * fivePercent)).toFixed(2)}`;
        } else { // 8% á vista, no débito
            return `Pagamento de: R$${(purchaseValue - (purchaseValue * eightPercent)).toFixed(2)}`;
        }
    } else {
        let installmentsAmount = Number(prompt("Em quantas parcelas gostaria de pagar? "))
        if(isValidAmount(installmentsAmount)){
            return "Escolha uma opção válida";
        }
        if(installmentsAmount <= 3){
            return `Pagamento de: ${installmentsAmount}x de R$${(purchaseValue / installmentsAmount).toFixed(2)}`;
        } else {
            purchaseValue += purchaseValue * fourPercent;
            return `Pagamento de: ${installmentsAmount}x de R$${(purchaseValue / installmentsAmount).toFixed(2)}`;
        }
    }
}