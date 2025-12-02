# Assessment: Programação Web com Javascript

---

## 1. Trabalhando com `pop` e `shift`

Assuma o seguinte vetor de planetas (copie-o para o seu código):

```javascript
let planetas = ["Mercúrio", "Vênus", "Terra", "Marte", "Júpiter"];
```

Agora, realize/implemente as seguintes operações utilizando `pop` e `shift`:

- Remova o primeiro planeta (índice 0).
- Remova o último planeta (índice 4).
- Mostre o vetor modificado no console do navegador.

---

## 2. Trabalhando com `splice`

Assuma o seguinte vetor de planetas (copie-o para o seu código):

```javascript
let planetas = ["Mercúrio", "Vênus", "Terra", "Marte", "Júpiter", "Saturno", "Urano", "Netuno", "Plutão", "Ceres"];
```

Agora, realize/implemente as seguintes operações utilizando `splice`:

- Remova o planeta Terra.
- Adicione Terra no lugar de Urano.
- Troque a ordem de Marte e Júpiter (de modo que fique Júpiter e depois Marte).
- Mostre o vetor modificado no console do navegador.

---

## 3. Trabalhando com `splice` e `indexOf`

Assuma o seguinte vetor de planetas (copie-o para o seu código):

```javascript
let planetas = ["Mercúrio", "Vênus", "Terra", "Marte", "Júpiter", "Terra", "Urano", "Netuno", "Plutão", "Ceres"];
```

Agora, utilizando `splice` e `indexOf/lastIndexOf`:

- Remova os planetas que estão antes do planeta Terra (Vênus e Urano, no caso).
- Mostre o vetor modificado no console do navegador.
- Para implementar sua lógica, assuma que o planeta Terra poderia estar ocupando qualquer índice.

---

## 4. Trabalhando com `while`

Utilizando `while` (ou `do..while`):

- Faça um programa que solicite o nome do usuário (prompt), de modo que o nome deve ser solicitado novamente caso nada tenha sido digitado.
- Depois, mostre o nome digitado no console do navegador.

---

## 5. Trabalhando com `for`

Assuma o seguinte vetor de tuplas (copie-o para o seu código):

```javascript
let tuplas = [[3, 7], [5, 2], [8, 4], [1, 9], [6, 3]];
```

Agora, utilizando `for..of`:

- Crie um programa que realize a soma de todos os números do vetor.
- Mostre o resultado no console do navegador.

---

## 6. Trabalhando com `for` aninhado

Assuma o seguinte vetor de números (copie-o para o seu código):

```javascript
let numeros = [3, 1, 2, 5];
```

Agora, utilizando `for` aninhado:

- Faça um programa para transformar esse vetor de números em um vetor de vetores com a contagem de 1 até o número do vetor.
- O resultado final deve ser:

```javascript
let contagens = [[1, 2, 3], [1], [1, 2], [1, 2, 3, 4, 5]];
```

- Mostre esse vetor no console do navegador.

---

## 7. Trabalhando com `map`

Assuma o seguinte vetor de letras (copie-o para o seu código):

```javascript
let minusculas = ["a", "b", "c", "d", "e"];
```

Agora, utilizando `map`:

- Crie um vetor de letras maiúsculas.
- Mostre esse vetor no console do navegador.

---

## 8. Trabalhando com `map` e `filter`

Assuma o seguinte vetor de tuplas de números (copie-o para o seu código):

```javascript
const tuplas = [[3, 5], [7, 1], [6, 8], [4, 9], [2, 3], [8, 1], [5, 7], [9, 6], [1, 4], [2, 8]];
```

Agora, utilizando `map` e `filter`:

- Obtenha um vetor com as somas das tuplas, mas somente para os elementos que tenham um número par e outro ímpar.
- O resultado final deve ser:

```javascript
[13, 5, 9, 15, 5];
```

- Mostre esse vetor no console do navegador.

---

## 9. Trabalhando com `reduce`

Assuma o seguinte vetor de números (copie-o para o seu código):

```javascript
let numeros = [1, [7, 2, [1, 2, 3, [4, [5, [4, 2, 6, [7, [8, [1, 2, 3, 9, [1, 10]]]]]]]]]];
```

Agora, utilizando `reduce`:

- Realize o somatório dos números.
- Mostre o resultado no console do navegador.

---

## 10. Trabalhando com `toFixed`

Assuma a seguinte frase (copie-a para o seu código):

```javascript
let frase = "Nesse momento, o BitCoin está em R$ 530.085,52. Loucura, né?";
```

Agora:

- Manipule a string para extrair o preço do BitCoin.
- Divida por três e mostre esse valor no console do navegador, com apenas duas casas decimais (`toFixed`).
- O resultado deve ser: `"176695.17"` (string).

---

## 11. Quantas letras "A"?

Assuma a seguinte frase (copie-a para o seu código):

```javascript
let frase = "toda ciência seria supérflua se houvesse coincidência imediata entre a aparência e a essência das coisas";
```

Agora:

- Implemente uma lógica para descobrir quantas letras "a" existem nessa frase.
- **Não utilize `for` nem `while`.**
- Mostre o resultado no console do navegador.

---

## 12. Remova as vogais

Assuma a seguinte frase (copie-a para o seu código):

```javascript
let frase = "toda ciencia seria superflua se houvesse coincidencia imediata entre a aparencia e a essencia das coisas";
```

Agora:

- Implemente uma lógica para criar uma nova string que seja igual a essa, só que sem as vogais.
- Mostre essa string no console do navegador.

---

## 13. Validar CPF

Crie uma função chamada `validarCPF`:

- Deve aceitar um argumento (`string`) chamado `cpf`.
- A função deve retornar `true` caso o CPF seja válido, e `false` caso seja inválido.
- Assuma que um CPF válido está no seguinte formato: `"000.000.000-00"` (onde “0” pode ser qualquer número).
- Mostre três exemplos de uso.

---

## 14. Validar CPF com `throw`

Copie a função `validarCPF` desenvolvida na questão anterior (**não modifique essa função**).

- Implemente um programa que solicite um CPF ao usuário via `prompt`.
- Caso o CPF informado seja inválido, dispare um `InvalidCPFError`:

```javascript
class InvalidCPFError extends Error {}
```

- **Não é necessário tratar o erro.**

---

## 15. Validar CPF com `try..catch`

Copie todo o código da questão anterior.

- Utilize `try..catch` para implementar o tratamento de erro.
- Caso não haja erro, mostre no console do navegador: `"CPF Válido"`.
- Caso contrário, mostre: `"CPF Inválido"`.

---

## 16. Entendendo `try..catch`

- Através de comentários no arquivo `script.js`, cite duas vantagens de utilizar `try..catch` para o tratamento de erros.