const algunsCarros = [
  ["Kwid", "Renault"],
  ["Polo", "Volkswagen"],
  ["S10", "Chevrolet"],
  ["March", "Nissan"],
  ["Civic", "Honda"],
  ["Tracker", "Chevrolet"],
  ["T-Cross", "Volkswagen"],
  ["Gol", "Volkswagen"],
  ["Duster", "Renault"],
  ["Onix", "Chevrolet"],
  ["Argo", "Fiat"],
  ["Kicks", "Nissan"],
  ["Fit", "Honda"],
  ["Fiorino", "Fiat"],
  ["Cronos", "Fiat"],
  ["Sandero", "Renault"],
  ["Versa", "Nissan"],
  ["HR-V", "Honda"],
  ["Virtus", "Volkswagen"],
  ["Uno", "Fiat"],
];

const brandCount = { };

for(let i = 0; i < (algunsCarros.length - 1) ; i++){
  let currentBrand = algunsCarros[i][1];
  if(brandCount[currentBrand]){
    brandCount[currentBrand] = brandCount[currentBrand] += 1;
  } else{
    brandCount[currentBrand] = 1;
  }
}

alert(`${"Chevrolet".padEnd(20, ' ')}| ${brandCount["Chevrolet"]}\n
${"Honda".padEnd(20, ' ')}| ${brandCount["Honda"]}\n
${"Volkswagen".padEnd(20, ' ')}| ${brandCount["Volkswagen"]}\n
${"Fiat".padEnd(20, ' ')}| ${brandCount["Fiat"]}\n
${"Nissan".padEnd(20, ' ')}| ${brandCount["Nissan"]}\n
${"Renault".padEnd(20, ' ')}| ${brandCount["Renault"]}\n`);