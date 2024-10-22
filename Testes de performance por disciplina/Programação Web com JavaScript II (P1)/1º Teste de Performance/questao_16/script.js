let keepLooping = true;
let biggestSalary = 0.0;
let biggestSalaryOwner = "";

while (keepLooping) {
    let currentSalary = Number(prompt("Entre o salário: "));
    if(isNaN(currentSalary)) {
        console.log("Apenas números permitidos");
        continue;
    }
    let currentName = prompt("Entre o nome: ");

    if(currentSalary > biggestSalary) {
        biggestSalary = currentSalary;
        biggestSalaryOwner = currentName;
    }

    let continueAnswer = prompt("Deseja continuar?\n1 para sim\n2 para não")
    if (continueAnswer === "2") {
        keepLooping = false;
    }
}

console.log(`${biggestSalaryOwner} tem o maior salário: ${biggestSalary}`);