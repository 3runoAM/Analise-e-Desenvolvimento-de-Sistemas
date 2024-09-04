const total = Number(prompt('Digite o valor total da compra: '));
const clientType = prompt('Digite o tipo de cliente:\n(A) Gestante\n(B) Aposentado\n(C) Pensionista').toLowerCase();
const discounts = [0.05, 0.1, 0.15, 0.2]

alert(applyDiscount(total, clientType));

function applyDiscount(total, clientType){
    if (isNaN(total) || total <= 0){
        return `Valor inválido! Tente novamente.`;
    }
    const higherThanEightyPredicate = total >= 80
    if(clientType === 'a'){
        if(higherThanEightyPredicate){
            return `O valor final é: R$${(total - total * discounts[3]).toFixed(2)}`; // 20%
        } else{
            return `O valor final é: R$${(total - total * discounts[2]).toFixed(2)}`; // 15%
        }
    } else if(clientType === 'b'){
        if(higherThanEightyPredicate){
            return `O valor final é: R$${(total - total * discounts[2]).toFixed(2)}`; // 15%
        } else{
            return `O valor final é: R$${(total - total * discounts[1]).toFixed(2)}`; // 10%
        }
    } else if (clientType === 'c'){
        if(higherThanEightyPredicate){
            return `O valor final é: R$${(total - total * discounts[1]).toFixed(2)}`; // 10%
        } else{
            return `O valor final é: R$${(total - total * discounts[0]).toFixed(2)}`; // 5%
        }
    } else {
        return `Tipo de consumidor não existe! Tente novamente`;
    }
}