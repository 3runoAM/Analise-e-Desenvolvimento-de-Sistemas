const resA = comparaStringCaseInsensitive("tEste", "Teste");
console.log(resA);

const resB = comparaStringCaseInsensitive("Javascript", "JavaScript");
console.log(resB);

const resC = comparaStringCaseInsensitive("amor", "odio");
console.log(resC);

function comparaStringCaseInsensitive(strA, strB) {
  return strA.toLowerCase() === strB.toLowerCase();
}
