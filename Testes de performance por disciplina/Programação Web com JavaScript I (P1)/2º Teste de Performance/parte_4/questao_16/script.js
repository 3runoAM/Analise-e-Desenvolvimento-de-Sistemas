let yearOfChoice = Number(prompt("Escolha um ano com quatro dígitos: "))

yearOfChoice % 4 === 0 ? alert(`${yearOfChoice} é bissexto!`) : alert(`${yearOfChoice} não é bissexto!`)