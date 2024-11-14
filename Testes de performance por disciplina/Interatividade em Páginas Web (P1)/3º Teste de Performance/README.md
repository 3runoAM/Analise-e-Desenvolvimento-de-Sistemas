# Interatividade em Páginas Web - 3º Teste de Performance;

### 1. Manipulando Elementos via DOM

Crie uma página HTML contendo:
- Uma lista vazia (`<ul>`) e um botão.
- Ao clicar no botão, um novo item é adicionado à lista com o texto "Novo Item" seguido do índice do item (ex: "Novo Item 1").
- Cada item deve ter um identificador único (`id`).
- Quando o item "Novo Item 10" for adicionado, exiba um alerta.

### 2. Manipulando Elementos via DOM - II

Implemente uma página onde:
- Uma imagem exibe uma mensagem ao usuário ao ser carregada e altera seu estilo como confirmação.
- Use o evento `load` com `addEventListener`.
- Quando a imagem carregar, altere seu estilo (ex: adicionando uma borda) e exiba uma mensagem na página.

### 3. Dark Mode

Crie um projeto com estrutura de tags HTML:
- Contendo `<header>`, `<nav>`, `<main>`, `<section>` e `<footer>`.
- Adicione um botão na `<section>` que ao ser clicado ativa o modo escuro (dark mode).
- Crie as classes de CSS necessárias para dark mode.
- Implemente no JavaScript a lógica para alternar o modo escuro ao clicar no botão.

### 4. Criação de Elementos

Clone o exercício anterior e:
- Adicione uma imagem logo abaixo do `<nav>`, utilizando o DOM.
- Defina atributos de acessibilidade como `alt` e `title`.

### 5. Criação de Elementos - II

Clone o exercício anterior e:
- Acesse o `<footer>` pelo DOM e adicione uma lista com o mesmo número de itens apresentados na navegação.
- Defina os atributos e valores específicos para cada item.

### 6. Criação de Elementos - III

Clone o exercício anterior e:
- Implemente um prompt para coletar o nome do usuário e armazená-lo em um objeto.
- Insira uma mensagem de boas-vindas personalizada com o nome coletado na `<section>` dentro da `<main>`.

### 7. Criação de Elementos - IV

Clone o exercício anterior e:
- Crie uma tabela com duas linhas e quatro colunas usando `innerHTML`.
- Insira dados diretamente pelo DOM.

### 8. Implementação de Drag and Drop

Implemente a funcionalidade de arrastar e soltar:
- Crie uma área de origem com três elementos (texto, caixa, e imagem).
- Crie uma área de destino para os itens arrastados.
- Configure a lógica de drag and drop para permitir que elementos possam ser movidos entre as áreas.

### 9. Implementação de Drag and Drop - II

Clone o exercício anterior e:
- Adicione um botão para retornar todos os itens para a área de origem.
- Adicione um contador de cliques no botão, exibindo a frase: “Você clicou xx vezes”.

### 10. Linhas em Tabela

Implemente a funcionalidade de adicionar novas linhas em uma tabela:
- Crie uma tabela com quatro colunas no HTML.
- No JavaScript, crie uma função para adicionar uma nova linha à tabela ao clicar em um botão.
- A função deve adicionar a linha ao final do corpo da tabela.

### 11. Remoção de Linhas em Tabela

Clone o exercício anterior e:
- Implemente uma função para remover a primeira linha da tabela ao clicar em um botão.
- Exiba uma mensagem para o usuário quando não houver mais linhas para remover.

### 12. Grupo - Drag and Drop 1

Baseado em um exercício do CodeSandbox, implemente:
- Função para mover `<div class="caixinha">` entre `<div class='container'>`.
- Permita o movimento entre containers e faça as modificações necessárias no HTML.

### 13. Grupo - Drag and Drop 2

Baseado em outro exercício do CodeSandbox:
- Crie um botão para adicionar elementos `<div class='caixinha'>` com classes de cores aleatórias.
- Permita arrastar os novos elementos entre os `<div class='container'>`.

### 14. Event Listener 1

No arquivo `script.js`, adicione:
- Um listener de `keydown` ao `<input id="texto">`.
- Verifique se o usuário pressionou Enter; copie o conteúdo para o `<span id="nome">` e limpe o campo de entrada.

### 15. Grupo - Event Listener 2

No arquivo `script.js`, adicione:
- Um listener de `click` ao `<div id="container">`.
- Ao clicar, o conteúdo do `<span>` filho deve se tornar “teste”.

### 16. Grupo - Event Listener 3

No arquivo `script.js`, adicione:
- Um listener de `click` ao `<ul id="lista">`.
- Ao clicar, mude o texto do `<li>` de “Acre” para “Amapá” e altere a cor de fundo para azul.