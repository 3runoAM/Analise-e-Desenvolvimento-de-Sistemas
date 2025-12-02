let frase = "Nesse momento, o BitCoin está em R$ 530.085,52. Loucura, né?";

const precoBitcoin = frase.slice(35, 46)
    .replace(".", "")
    .replace(",", ".");

console.log((precoBitcoin / 3).toFixed(2));