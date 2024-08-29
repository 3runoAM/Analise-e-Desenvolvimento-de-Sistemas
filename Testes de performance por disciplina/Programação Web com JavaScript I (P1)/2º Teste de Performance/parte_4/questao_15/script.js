const choices = ["Pedra", "Papel", "Tesoura"]

let userChoice = Number(prompt("Escolha uma opção:\n1- Pedra\n2- Papel\n3- Tesoura"));
let randomChoice = Math.floor(Math.random() * 3) +1;

const userWins = "Você ganhou!"
const userLoses = "Você perdeu!"
const tie = "Empate!"

alert(`${rockPaperScissors(userChoice, randomChoice)}\nVocê escolheu ${choices[userChoice-1]} e o programa escolheu ${choices[randomChoice-1]}`);

function rockPaperScissors(userChoice, randomChoice) {
    if(isNaN(userChoice) || userChoice <= 0 || userChoice > 3) {
        return "Opção inválida!";
    }
    switch (userChoice) {
        case 1: // Pedra
            switch (randomChoice) {
                case 3: // Tesoura
                    return userWins;
                case 2: // Papel
                    return userLoses;
                default:
                    return tie;
            }
        case 2: // Papel
            switch (randomChoice) {
                case 1: // Pedra
                    return userWins;
                case 3: // Tesoura
                    return userLoses;
                default:
                    return tie;
            }
        case 3: // Tesoura
            switch (randomChoice) {
                case 2: // Papel
                    return userWins;
                case 1: // Pedra
                    return userLoses;
                default:
                    return tie;
            }
    }
}