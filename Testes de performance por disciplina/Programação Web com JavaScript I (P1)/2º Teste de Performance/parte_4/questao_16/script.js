let yearOfChoice = Number(prompt("Escolha um ano com quatro dígitos: "))

if ((yearOfChoice % 4 === 0 && yearOfChoice % 100 !== 0) || yearOfChoice % 400 === 0) {
    alert("O ano é bissexto");
} else {
    alert("O ano não é bissexto");
}