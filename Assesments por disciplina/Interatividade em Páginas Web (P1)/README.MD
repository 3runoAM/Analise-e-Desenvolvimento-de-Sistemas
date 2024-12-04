# Interatividade em Páginas Web: Assessment

## Exercício 1: Criar objetos com propriedades e métodos

**Descrição**  
Crie um objeto representando um "Carro", com propriedades como `marca`, `modelo`, `ano`, e métodos como `mostrarDetalhes()` e `ligar()`.
- Exiba as propriedades do carro no console.
- O método `ligar` deve imprimir `"O carro está ligado!"` no console.

---

## Exercício 2: Criar objetos com função construtora

**Descrição**  
Crie objetos através de uma função construtora chamada `Carro` que aceite parâmetros para `marca`, `modelo` e `ano`.
- Instancie 3 novos objetos usando a função construtora.
- Acesse as propriedades usando `this`.

---

## Exercício 3: Selecionar elementos HTML pelo ID, tag, classe ou outros seletores

**Descrição**  
Crie um arquivo HTML com:
- Um elemento com o `id="titulo"`.
- Uma classe `.descricao`.
- Três elementos `<p>`.

Use JavaScript para:
- Alterar o texto do elemento pelo ID.
- Alterar a cor de fundo do elemento pela classe.
- Adicionar texto ao primeiro `<p>`.

---

## Exercício 4: Acessar elementos HTML pela árvore DOM

**Descrição**  
Crie uma lista `<ul>` com itens `<li>`. Use JavaScript para:
- Acessar o primeiro item da lista (usando `parentNode` e `firstChild`).
- Acessar o último item da lista (usando `lastElementChild`).
- Adicionar um novo item ao final da lista.

---

## Exercício 5: Atualizar dinamicamente atributos de elementos HTML

**Descrição**  
Crie uma imagem `<img>` no HTML com um `src` e `alt` definidos.  
Use JavaScript para:
- Alterar o atributo `src` para uma nova imagem.
- Alterar o atributo `alt` para algo diferente.
- Adicionar um novo atributo `title` à imagem.

---

## Exercício 6: Atualizar dinamicamente classes de elementos HTML

**Descrição**  
Crie um elemento `<div>` com a classe `caixa`.  
Use JavaScript para:
- Adicionar a classe `ativa` à `<div>`.
- Remover a classe `caixa`.
- Alternar entre as classes `ativa` e `inativa` ao clicar em um botão criado pelo JavaScript.

---

## Exercício 7: Criar dinamicamente novos elementos HTML

**Descrição**  
Crie:
- Um botão no HTML.
- Um contêiner vazio (`<div>` ou `<section>`).

Ao clicar no botão, crie um novo parágrafo `<p>` e adicione-o ao contêiner com texto dinâmico gerado por um array.

---

## Exercício 8: Atualizar e remover dinamicamente elementos HTML existentes

**Descrição**  
Crie uma lista de 5 itens no HTML. Use JavaScript para:
- Alterar o texto de um item.
- Remover o último item da lista ao clicar em um botão.
- Adicionar dinamicamente um novo item à lista ao clicar em outro botão.

---

## Exercício 9: Criar páginas web que respondem a cliques de mouse

**Descrição**  
Crie um parágrafo e um botão no HTML.  
Use JavaScript para:
- Exibir uma mensagem no console ao clicar no botão.
- Alterar o texto do botão a cada clique.
- Mudar o estado visual do elemento ao passar o mouse por cima e voltar ao estado inicial ao retirar o mouse.

---

## Exercício 10: Criar páginas web que respondem a eventos de carregamento de elementos (load)

**Descrição**  
Crie um script que:
- É executado ao término do carregamento da página, exibindo uma mensagem no console.
- Recupera informações como `language` e `url` do navegador e as exibe na página.
- Insere um *alert* confirmando a inserção das informações e redireciona a página para a página inicial do Infnet.

---

## Exercício 11: Criar páginas web interativas com múltiplos eventos em um mesmo elemento

**Descrição**  
Crie um botão no HTML.  
Use JavaScript para:
- Adicionar os eventos `mouseover`, `mouseout`, e `mousedown` usando `addEventListener`.
- Cada evento deve alterar visualmente ou textualmente o botão.

---

## Exercício 12: Task List Simples

**Descrição**  
Crie uma lista de tarefas onde o usuário pode adicionar e remover tarefas dinamicamente.

**Requisitos**
- Campo de texto (`<input type="text">`) para digitar a tarefa.
- Botão "Adicionar Tarefa".
- Uma `<ul>` vazia para exibir as tarefas.
- Botão "Remover" ao lado de cada tarefa para excluí-la.

---

## Exercício 13: Enviar Mensagem pelo WhatsApp

**Descrição**  
Crie um formulário com:
- Um campo de texto para o número de telefone.
- Um campo de texto para a mensagem.
- Um botão "Enviar pelo WhatsApp".

Use JavaScript para montar a URL no formato `https://wa.me/<número>?text=<mensagem>` e abri-la em uma nova aba.

---

## Exercício 14: Consumindo e exibindo produtos da Fake Store API

**Descrição**  
Consuma a Fake Store API para exibir produtos em *cards*.

**Requisitos**  
Cada card deve conter:
- Nome do produto.
- Imagem.
- Preço.
- Descrição curta.
- Estilo visual organizado com CSS.

---

## Exercício 15: Consumindo a API da Câmara dos Deputados

**Descrição**  
Consuma a API de Dados Abertos da Câmara dos Deputados para listar os 3 primeiros deputados e permitir busca por nome.

**Requisitos**
- Exiba nome, partido, UF, e foto dos 3 primeiros deputados em *cards*.
- Adicione campo de busca para filtrar deputados por nome.

---

## Exercício 16: Interatividade estilo Instagram

**Descrição**  
Implemente uma interface semelhante a um post do Instagram com interações como:
- Exibir imagem de perfil maior ao passar o mouse.
- Alterar o ícone de coração e incrementar curtidas ao clicar.
- Criar novos comentários ao clicar no balão de comentários.
- Salvar o post ao clicar no ícone correspondente e exibir um *alert*.

![](assets/imagens/instagram_post_example.png)