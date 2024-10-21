# Interatividade em Páginas Web: 1º Teste de Performance

## [Tarefa 01: Criando um objeto](questao_1/script1.js)

No arquivo `script1.js`, crie um objeto `pessoa` que possua as propriedades `nome` e `idade`.

---

## [Tarefa 02: Propriedades de objeto](questao_2/script2.js)

No arquivo `script1.js`, siga as etapas abaixo:
1. Crie um objeto `carro` que possua as propriedades `ano` e `modelo`.
2. Faça a propriedade `ano` receber `1968`.
3. Faça a propriedade `modelo` receber `Fusca`.

---

## [Tarefa 03: Criando objeto que possui método](questao_3/script3.js)

No arquivo `script1.js`, siga as etapas abaixo:
1. Utilizando o objeto `carro` do exercício anterior, faça com que ele tenha o método `acelerar`.
2. Chame o método `acelerar` a partir de um objeto instanciado.
3. Ao chamar o método `acelerar`, será exibido um alerta com a mensagem: “Acelerando!”.

---

## [Tarefa 04: Criando objeto à partir de variáveis](questao_4/script4.js)

No arquivo `script1.js`, siga as etapas abaixo:
1. Crie duas variáveis contendo:
    - O nome de um colégio.
    - O ano de fundação deste colégio.
2. Crie um objeto `colegio` que possua propriedades que utilizem estas variáveis.

---

## [Tarefa 05: Adicionando propriedades em objeto](questao_5/script5.js)

No arquivo `script1.js`, adicione ao objeto `colegio` criado no exercício anterior as propriedades:
- `nomeDiretor`
- `numeroAlunos`
- `telefone`

---

## [Tarefa 06: Adicionando método em objeto](questao_6/script6.js)

No arquivo `script1.js`, continue o que foi feito no exercício anterior e siga as etapas abaixo:
1. Adicione um método chamado `obterDiretor` que, ao ser chamado, mostre o nome do diretor do colégio.
2. Chame o método `obterDiretor` a partir do objeto.

---

## [Tarefa 07: Removendo uma propriedade de um objeto](questao_7/script7.js)

No arquivo `script1.js`, siga as etapas abaixo:
1. Remova a propriedade `ano de fundação` do objeto `colegio` criado nos exercícios anteriores, utilizando a remoção de propriedade.
2. Não recrie o objeto sem a propriedade. O objeto inicialmente terá tudo o que foi feito nos exercícios anteriores. Remova através de codificação.

---

## [Tarefa 08: Utilizando a palavra reservada “this”](questao_8/script8.js)

No arquivo `script1.js`, siga as etapas abaixo:
1. Crie um objeto `advogado` que possua as propriedades `nome`, `horasTrabalhadas` e `valorHora`.
2. Crie também neste objeto um método chamado `calcularGanho`.
3. Chame o método `calcularGanho` através de um objeto instanciado.
4. No método, realize a multiplicação das `horas trabalhadas` pelo valor que o advogado ganha por hora. Use a palavra chave `this`.

---

## [Tarefa 09: Adicionando atributo](questao_9/script9.js)

No arquivo `script1.js`, siga as etapas abaixo:
1. Adicione o atributo `title` na tag `<img>`, colocando o conteúdo como “grãos de café”.
2. Não faça as alterações manualmente no arquivo `index.html`. Utilize o DOM para resolver o exercício.

---

## [Tarefa 10: Removendo atributo](questao_10/script10.js)

No arquivo `script1.js`, siga as etapas abaixo:
1. Remova o atributo `target` na tag `<a>`.
2. Não faça as alterações manualmente no arquivo `index.html`. Utilize o DOM para resolver o exercício.

---

## [Tarefa 11: Alterando atributo](questao_11/script11.js)

No arquivo `script1.js`, selecione o elemento com id `card` e altere através de alteração de atributo via JavaScript:
- A cor de fundo para amarelo.
- A borda para sólida, vermelha com 4px de largura.

Não faça as alterações manualmente no arquivo `index.html`. Utilize o DOM para resolver o exercício.

---

## [Tarefa 12: Grupo - Objetos aninhados](questao_12/script12.js)

No arquivo `script1.js`, siga as etapas abaixo:
1. Crie um objeto `cidade`. Este objeto vai conter:
    - Uma propriedade para `nome`.
    - Uma propriedade para `ano de fundação`.
    - Uma propriedade que será um objeto `prefeito`.
2. O objeto `prefeito` que está dentro do objeto `cidade` deve possuir:
    - Uma propriedade para o `nome`.
    - Uma propriedade para a `idade`.

---

## [Tarefa 13: Grupo - Objeto com método usando “this”](questao_13/script13.js)

No arquivo `script1.js`, siga as etapas abaixo:
1. Peça ao usuário para informar o raio de um círculo.
2. Crie um objeto `circulo` que tenha:
    - Uma propriedade de `raio` com o valor informado pelo usuário.
    - Dois métodos: um para calcular a `circunferência` e outro para calcular a `área`.
3. Exiba a circunferência através da chamada do método respectivo do objeto `circulo`.
4. Exiba a área através da chamada do método respectivo do objeto `circulo`.

   **DICA**: talvez seja necessário usar a constante `Math.PI` para este exercício:
    - Considere para a área: `Área = Math.PI * raio * raio`
    - Considere para a circunferência: `Circunferência = Math.PI * raio * 2`

---

## [Tarefa 14: Grupo - Alterando atributos com if](questao_14/script14.js)

No arquivo `script1.js`, siga as etapas abaixo:
1. Verifique se o atributo `href` da tag `<a>` com id `link` está com o conteúdo: “https://www.infnet.edu.br/infnet/instituto/”.
2. Caso não esteja, faça com que “https://www.infnet.edu.br/infnet/instituto/” se torne o endereço deste link.
3. Não faça as alterações manualmente no arquivo `index.html`. Utilize o DOM para resolver o exercício.

---

## [Tarefa 15: Grupo - Trocando a imagem](questao_15/script15.js)

No arquivo `script1.js`, siga as etapas abaixo:
1. Após clicar na tag `<img>`, troque o conteúdo do seu atributo `src`.
2. Faça aparecer a imagem chamada “cafe.jpg”.
3. Não faça as alterações manualmente no arquivo `index.html`. Somente adicione uma função de click na img. Utilize o DOM para resolver o exercício.

---

## [Tarefa 16: Grupo - Trocando estilos](questao_16/script16.js)

No arquivo `script1.js`, siga as etapas abaixo:
1. Ao clicar na `div` de classe `conteudo`, modifique o atributo `style`, fazendo as modificações:
    - A `cor de fundo` para azul.
    - A `letra` para branco.
    - A `cor de borda` para laranja.
    - Aumente sua `largura` e `altura` em 2px.

2. Não faça as alterações manualmente no arquivo `index.html`. Somente adicione uma função de click na div. Utilize o DOM para resolver o exercício.