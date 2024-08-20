# 1. Calculando o troco

Faça o JavaScript calcular o troco dos produtos que você compra! Crie um programa que faça o seguinte:

1. Utilize `prompt` para solicitar a quantidade de dinheiro para pagar o produto e guarde esse valor na variável `dinheiroQueRecebi`.
2. Solicite o valor do produto e guarde esse valor na variável `valorDoProduto`.
3. Crie uma variável chamada `troco`, que deve armazenar esse valor.
4. Mostre no console do navegador os seguintes valores: 
   - (a) o troco
   - (b) o troco arredondado pra cima
   - (c) o troco arredondado pra baixo

---

# 2. Trabalhando com divisão e resto

Crie um programa que solicite dois números inteiros (`numeroA`, `numeroB`) via `prompt`. Caso o usuário digite números com parte decimal, você deve arredondá-los para baixo. Depois, divida o `numeroA` pelo `numeroB` e calcule o resto da divisão. Mostre esses resultados em um `alert` da seguinte forma:

- **O resultado da divisão é:** *RESULTADO AQUI*
- **O resto da divisão é:** *RESTO AQUI*

**P.S.:** Não esqueça da quebra de linha no `alert`!

---

# 3. Utilizando radiciação e potenciação

Crie um programa que solicite dois números inteiros (`numeroA`, `numeroB`) via `prompt`. Caso o usuário digite números com parte decimal, você deve arredondá-los para cima. Depois, eleve o `numeroA` à segunda potência e o `numeroB` à terceira potência, e guarde-os, respectivamente, nas variáveis `potenciaA` e `potenciaB`. Por fim, calcule a raiz quadrada da soma de `potenciaA` e `potenciaB`, mostrando seu resultado em um `alert`.

---

# 4. Intervalos de números aleatórios

Faça um programa que solicite dois números inteiros (`numeroInicio`, `numeroFim`) via `prompt`. Caso o usuário digite números com parte decimal, você deve arredondá-los para baixo. Assuma que o `numeroInicio` sempre vai ser menor do que o `numeroFim`. Agora, faça o seu programa gerar um número inteiro aleatório **ENTRE** `numeroInicio` e `numeroFim`.

Por exemplo, se `numeroInicio=3` e `numeroFim=7`, as possibilidades de números aleatórios devem ser {3, 4, 5, 6, 7}.

Por fim, mostre esse número aleatório no console do navegador.

---

# 5. Declaração de variáveis

Implemente as seguintes declarações de variáveis:

1. Crie uma variável chamada `melhorGuitarrista`, e guarde o valor “Jimi Hendrix”. Deve ser do tipo `const`.
2. Crie as variáveis `a=1`, `b=2`, e `c=3` utilizando a sintaxe de declaração de múltiplas variáveis. Devem ser do tipo `let`.
3. Crie uma variável chamada `salarioMinimo`, que deve guardar o salário mínimo atual do Brasil. Deve ser do tipo `let`.
4. Crie um comentário explicando a diferença entre `let` e `const`. Mostre exemplos de uso.
5. Explique porque utilizar `var` ou variáveis não declaradas é uma má prática.

---

# 6. Práticas de naming

Modifique o arquivo `meuCodigoJavascript.js`, de forma a aplicar a prática de naming correta, conforme os comentários do código. **NÃO MODIFIQUE MAIS NADA ALÉM DOS NOMES DAS VARIÁVEIS.**

---

# 7. Corrigindo as variáveis

Modifique o arquivo `meuCodigoJavascript.js`, de forma a **REMOVER** os caracteres inválidos dos nomes das variáveis. **NÃO MODIFIQUE MAIS NADA ALÉM DOS NOMES DAS VARIÁVEIS.**

---

# 8. Diferença entre null e undefined

Através de comentários, no arquivo `meuCodigoJavascript.js`, explique a diferença entre os valores `null` e `undefined`. Apresente um exemplo onde o tipo `undefined` aparece no JS, e também um exemplo de uso prático do tipo `null`.

---

# 9. Trabalhando com conversão entre string e number

No arquivo `meuCodigoJavascript.js`, modifique o código de modo a alterar **SOMENTE** as conversões de `Number` por `String` e vice-versa. As modificações devem ser realizadas de modo que o resultado que deve aparecer no `console.log` seja: `133`.

---

# 10. Essa variável faz o seu tipo?

Sem adicionar novas linhas, altere o código de `meuCodigoJavascript.js` de modo que as verificações `typeof` validem para verdadeiro (se estiver certo, vai mostrar `true` no console para todas as letras).

---

# 11. Faça ser verdadeiro!

No arquivo `meuCodigoJavascript.js`, comente as linhas entre o espaço indicado para que todas as validações mostradas no `console.log` mostrem `true`.

---

# 12. Grupo - Classificação de triângulo

No arquivo `meuCodigoJavascript.js`, siga as etapas abaixo:

Utilize `prompt` para solicitar 3 números, correspondentes ao tamanho de três lados de um triângulo, e exiba no console que tipo de triangulo pode ser formado.

**Obs:**

- Um triângulo Equilátero possui todos os lados iguais.
- Um triângulo Isósceles possui dois lados iguais e um diferente.
- Um triângulo Escaleno possui todos os lados diferentes.

---

# 13. Grupo - Compras com desconto

No arquivo `meuCodigoJavascript.js`, siga as etapas abaixo:

1. Crie uma aplicação que solicite ao usuário o valor total de uma compra.
2. Solicite também a forma de pagamento.

**Obs:** Para concluir o exercício, utilizando somente a estrutura `If/Else` siga as condições abaixo:

- Pagamento à vista, no dinheiro: Informar o valor com desconto de 10%.
- Pagamento à vista, no débito: Informar o valor com desconto de 8%.
- Pagamento à vista, no crédito: Informar o valor com desconto de 5%.
- Pagamento a prazo, até 3x, no débito: sem desconto, informar valor das parcelas.
- Pagamento a prazo, acima de 3x, no débito: Informar o valor com acréscimo de 4%, informar valor das parcelas.

---

# 14. Grupo - Operações com números

No arquivo `meuCodigoJavascript.js`, siga as etapas abaixo:

1. Altere apenas os `operadores` de `pré` e `pós` `incremento` e `decremento`, incluindo retirá-los caso necessário.
2. Imprima o valor `0 (zero)` em todos os `console.log`.

**Obs:** Utilize o script que está no Replit.

---

# 15. Grupo - Pedra, Papel e Tesoura

No arquivo `meuCodigoJavascript.js`, siga as etapas abaixo:

1. Crie uma aplicação que peça que o usuário escolha entre Pedra, Papel ou Tesoura.
2. O programa deve escolher uma dessas opções aleatoriamente.
3. Informar para o usuário qual foi a escolha sorteada pelo programa.
4. Mostre se ele ganhou ou não do programa.

---

# 16. Grupo - Ano bissexto

No arquivo `meuCodigoJavascript.js`, siga as etapas abaixo:

1. Crie uma aplicação que solicite ao usuário um ano com 4 dígitos.
2. A aplicação deve informar para o usuário se aquele ano é bissexto ou não.