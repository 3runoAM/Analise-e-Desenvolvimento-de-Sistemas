imprimeRetangulo(2, 3);

imprimeRetangulo(5, 3);

imprimeRetangulo(10, 7);

function imprimeRetangulo(largura, altura) {
  for (let i = 1; i <= altura; i++) {
    console.log("*".repeat(largura));
  }
}
