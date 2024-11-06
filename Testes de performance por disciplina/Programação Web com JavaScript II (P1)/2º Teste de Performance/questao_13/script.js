let randomNumberQuantity = "_";
do {
    randomNumberQuantity = prompt(`Quantos números aleatórios gostaria?`);
} while (randomNumberQuantity === "" || isNaN(randomNumberQuantity));

for (let i = 1; i <= randomNumberQuantity; i++) {
    let randomNumber = Math.ceil(Math.random() * 60);

    console.log(`Número aleatório ${i}: ${randomNumber}`);
}