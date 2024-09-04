const roboRatVotes = Number(prompt('Quantos votos o RoboRat recebeu?'));
const superKeybordeVotes = Number(prompt('Quantos votos o SuperKeyborde recebeu?'));
const nuleVotes = Number(prompt('Quantos votos nulos foram registrados?'));

// Cálculo de votos
const validVotes = roboRatVotes + superKeybordeVotes;
const totalVotes = roboRatVotes + superKeybordeVotes + nuleVotes;

// Cálculo de porcentagens
const roboRatPercentage = (roboRatVotes / validVotes) * 100;
const superKeybordePercentage = (superKeybordeVotes / validVotes) * 100;
const nulePercentage = (nuleVotes / totalVotes) * 100;

alert("O resultado da eleição foi...")
alert(`${decideWinner(roboRatPercentage, superKeybordePercentage)}! ${nulePercentage.toFixed(2)}% foram votos nulos!`)

function decideWinner(roboRatPercentage, superKeybordePercentage) {
    if (roboRatPercentage > superKeybordePercentage) {
        return `RoboRat é o novo mascote do time com ${roboRatPercentage.toFixed(2)}% dos votos!` +
            ` Superkeyboard fica em segundo lugar com ${superKeybordePercentage.toFixed(2)}% dos votos`;
    } else if (superKeybordePercentage > roboRatPercentage) {
        return `SuperKeyborde é o novo mascote do time com ${superKeybordePercentage.toFixed(2)}% dos votos!` +
            ` RoboRat fica em segundo lugar com ${roboRatPercentage.toFixed(2)}% dos votos`;
    } else {
        return 'Empate!';
    }
}