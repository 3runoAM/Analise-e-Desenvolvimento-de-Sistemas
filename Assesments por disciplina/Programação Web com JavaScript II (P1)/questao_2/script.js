let planetas = [ "Mercúrio", "Vênus", "Terra", "Marte", "Júpiter", "Saturno", "Urano", "Netuno", "Plutão", "Ceres"];

const terra = planetas.splice(2, 1);
planetas.splice(5, 1, terra[0]);

const marte = planetas.splice(2, 1);
planetas.splice(3, 0, marte[0]);

console.log(planetas);