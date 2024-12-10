let planetas = [ "Urano", "Vênus", "Terra", "Marte", "Júpiter", "Terra", "Mercúrio", "Netuno", "Plutão", "Ceres" ];

planetas.splice(0, planetas.indexOf("Terra"));

console.log(planetas);