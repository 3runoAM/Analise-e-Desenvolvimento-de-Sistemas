# Interatividade em páginas web - 2º Teste de Performance

## 1. Redirecionamento de Páginas

- **Descrição**: Crie um botão com o texto “Redirecionar” no HTML.
- **Instruções**:
  - Adicione um evento de clique que chamará uma função ao ser pressionado.
  - No arquivo `script.js`, crie uma função que exibe um alerta: “Você será redirecionado”.
  - Após o alerta, redirecione para uma nova página (ex.: `window.location.href = "https://exemplo.com"`).

## 2. Evento de Clique

- **Descrição**: Crie um botão no HTML com o texto “Inserir”.
- **Instruções**:
  - Adicione um evento de clique que chama uma função.
  - No `script.js`, a função deve:
    - Inserir um parágrafo com duas frases à sua escolha.
    - Alterar o fundo do parágrafo para amarelo e a cor do texto para azul.

## 3. Adicionando Classes

- **Descrição**: No HTML, crie três parágrafos com texto lorem ipsum.
- **Instruções**:
  - No `style.css`, crie as classes:
    - `Borda`: Define borda sólida para os elementos.
    - `Texto`: Altera a cor e o tamanho do texto.
    - `Fundo`: Define cor de fundo e margem interna.
  - No `script.js`, aplique combinações de classes diferentes em cada parágrafo para testar efeitos visuais.

## 4. Removendo e Alterando Classes

- **Descrição**: Clone o exercício anterior.
- **Instruções**:
  - Acesse cada parágrafo e suas classes atribuídas.
  - Remova classes de um parágrafo e altere as classes dos outros pelo DOM.

## 5. Criando Elementos

- **Descrição**: No `script.js`, crie uma lista com 4 itens.
- **Instruções**:
  - Estilize a lista definindo cor de fundo, cor do texto, fonte sem serifa e borda.
  - Alterações apenas pelo DOM.

## 6. Criando Elementos - II

- **Descrição**: Clone o exercício anterior.
- **Instruções**:
  - Insira dois parágrafos com IDs “primeiro” e “segundo”.
  - Adicione um `h2` entre os parágrafos usando `appendChild` ou `insertBefore`.

## 7. Criando Elementos - III

- **Descrição**: Clone o exercício anterior.
- **Instruções**:
  - Adicione uma `section` com ID “galeria” após os parágrafos e estilize-a como um container flexível.
  - Insira três tags de imagem dentro da seção.

## 8. Removendo Elementos

- **Descrição**: Clone o exercício anterior.
- **Instruções**:
  - Remova o primeiro item da lista e o primeiro parágrafo inserido, usando métodos de DOM específicos.

## 9. Trocando Elementos

- **Descrição**: Clone o exercício anterior.
- **Instruções**:
  - Substitua o último item da lista por um novo item, utilizando `replaceChild`.

## 10. Navegação de Elementos

- **Descrição**: Clone o exercício anterior.
- **Instruções**:
  - Acesse a segunda imagem da seção “galeria” e navegue até o primeiro item da lista.
  - Exiba o valor do item em um alert.

## 11. Navegação de Elementos - II

- **Descrição**: Clone o exercício anterior.
- **Instruções**:
  - Acesse o `body` e navegue até a primeira imagem na seção “galeria”.
  - Exiba o valor do atributo `src` da imagem em um alert.

## 12. Grupo - Adicionando Itens

- **Objetivo**: Criar um botão que adiciona novos itens a uma lista dinamicamente.
- **Instruções**:
  - No `script.js`, crie um `<button>` com o texto "Inserir" e adicione-o ao `<body>` com `append`.
  - Ao clicar, crie um `<li>` com o texto "Nova entrada" e adicione-o como filho do `<ul>` com ID "lista".

## 13. Grupo - Modal

- **Objetivo**: Implementar um modal que pode ser exibido e ocultado com o DOM.
- **Instruções**:
  - No `script.js`, adicione a classe `hide` ao `<div>` com ID "modal".
  - Defina `hide` no `style.css` para tornar a `div` invisível.
  - Use um botão para mostrar o modal e a imagem com ID "close" para escondê-lo.

## 14. Grupo - Troca de Classes

- **Objetivo**: Alternar classes dos elementos de uma tabela.
- **Instruções**:
  - No `script.js`, inverta as classes dos itens da tabela:
    - Elementos com classe azul devem receber a classe vermelho e vice-versa.

## 15. Grupo - Condições

- **Objetivo**: Adicionar estilos condicionais às linhas de uma tabela.
- **Instruções**:
  - No `script.js`, adicione um evento de clique ao botão dentro da `<td>`.
  - Ao clicar, verifique o valor da classe "nota":
    - Se maior ou igual a 5, altere a cor de fundo da `<tr>` para verde.
    - Se menor que 5, altere para vermelho.

## 16. Grupo - Acordeão

- **Objetivo**: Implementar um accordion que exibe e esconde conteúdo.
- **Instruções**:
  - No `script.js`, torne todas as tags `<p>` invisíveis no estado inicial.
  - Ao clicar em uma `<div>` com classe "accordion-item", mostre o conteúdo e oculte os demais, se necessário.
  - Se a `<div>` já estiver visível, oculte-a novamente.
