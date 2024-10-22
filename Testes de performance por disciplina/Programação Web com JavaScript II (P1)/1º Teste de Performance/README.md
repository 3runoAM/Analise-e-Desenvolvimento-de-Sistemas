# Programação Web com Javascript II: 1º Teste de Performance

## 1. Criar um vetor

Crie uma lista com doze posições. Os elementos devem ser nomes de filmes, mas os filmes **“Senhor dos Anéis”**, **“Matrix”** e **“De Volta para o Futuro”** devem estar obrigatoriamente na lista, em qualquer posição que não sejam nem a primeira e nem a última, e também não podem ser vizinhos. Mostre no console o primeiro elemento do vetor e também a quinta posição (índice).

## 2. Adicionar elementos ao final do vetor

Copie o vetor criado no exercício 1.  
Utilizando o método `push`, adicione três novos filmes ao final do vetor. A cada alteração, mostre o novo tamanho do vetor. **NÃO UTILIZE LENGTH**.

## 3. Remover elementos do final do vetor

Copie o vetor criado no exercício 1, sem as alterações dos outros exercícios.  
Utilizando o método `pop`, remova os últimos dois filmes do vetor. Mostre os filmes removidos no console do navegador.

## 4. Remover um elemento do vetor

Copie o vetor criado no exercício 1, sem as alterações dos outros exercícios.  
Utilizando `splice`, remova a sexta posição (índice) do vetor. Mostre o filme removido no console do navegador.

## 5. Adicionar múltiplos elementos no vetor

Copie o vetor criado no exercício 1, sem as alterações dos outros exercícios.  
Utilizando `splice`, adicione três novos filmes antes do índice 4. Além disso, adicione dois novos filmes depois do índice 7.

## 6. Sobrescrever múltiplos elementos do vetor

Copie o vetor criado no exercício 1, sem as alterações dos outros exercícios.  
Utilizando `splice`, substitua os filmes entre os índices 2 e 6 por três novos filmes. Mostre no console do navegador os filmes que não estão mais presentes no vetor após essa alteração.

## 7. Procurando pelo nome

Copie o vetor criado no exercício 1, sem as alterações dos outros exercícios.  
Utilizando `splice` e `indexOf`, apague o filme **“Matrix”** do vetor. Depois, substitua o filme **“Senhor dos Anéis”** pelos filmes **“Senhor dos Anéis: A Sociedade do Anel”**, **“Senhor dos Anéis: As Duas Torres”** e **“Senhor dos Anéis: O Retorno do Rei”**.

**Obs.:** Não procure os elementos pelo índice para resolver esse exercício.

## 8. Apagando os elementos próximos

Copie o vetor criado no exercício 1, sem as alterações dos outros exercícios.  
Utilizando `splice` e `indexOf`, remova, de uma só vez, o filme **“De Volta para o Futuro”**, bem como os filmes que se encontram antes e depois deste.

**Obs.:** Não procure os elementos pelo índice para resolver esse exercício.

## 9. Selecionando elementos do vetor

Copie o vetor criado no exercício 1, sem as alterações dos outros exercícios.  
Utilizando `slice` e `indexOf`, selecione todos os filmes entre **“Matrix”** e **“Senhor dos Anéis”**. Mostre esses filmes no console do navegador.

**Obs.:** Não procure os elementos pelo índice para resolver esse exercício.

## 10. Selecione a metade do vetor

Copie o vetor criado no exercício 1, sem as alterações dos outros exercícios.  
Utilizando `slice`, selecione a primeira metade do vetor e mostre-a no console do navegador. Essa lógica deve funcionar independentemente da quantidade de elementos no vetor.

## 11. Obter filme aleatório

Copie o vetor criado no exercício 1, sem as alterações dos outros exercícios.  
Utilizando `prompt`, faça as seguintes perguntas para o usuário:

- Primeira ou segunda metade do vetor? (Respostas válidas: **“primeira”** e **“segunda”**)
- Quantos filmes? (Respostas válidas: números entre 1 e 3)

Baseado nessas respostas, selecione aleatoriamente um recorte de filmes do vetor e mostre no console do navegador. Implemente as validações necessárias.

## 12. Grupo - Inverter e ordenar array

No arquivo `script.js`, siga as etapas abaixo:

- Crie um novo array chamado **pesos**.
- Adicione 5 pesos.
- Imprima a ordem invertida do vetor no console.
- Imprima o vetor na ordem crescente.

**Obs.:**

- Utilize um método para inverter a ordem do array.
- Utilize um método para classificar em ordem crescente o array.
- Utilize `console.log` para imprimir o resultado.

## 13. Grupo - Fibonacci com while

A sequência de Fibonacci é uma série de números em que cada número é a **soma** dos dois **números** que o **antecedem**. Ela **começa** com **0** e **1**. No arquivo `script.js`, siga a etapa abaixo:

- Crie um programa que preencha um **array**, com a sequência de Fibonacci até o número **55**.

**Obs.:**

- Utilize o `while`.
- O número **55** não é a quantidade de elementos, mas sim, o valor do último elemento que comporá o array.

## 14. Interrompendo o loop

No arquivo `script.js`, siga as etapas abaixo:

- A cada iteração, incremente uma variável **contador**. Inicie com o valor **0** (zero).
- A cada iteração, a variável **contador** deve ser incrementada em 1.
- O loop deve continuar infinitamente, mas você deve fazer com que a cada iteração, exista **10% de chance do loop ser finalizado**.

**Obs.:**

- Utilize a estrutura de repetição `while`.
- Utilize `console.log` para exibir o valor do contador a cada iteração.
- Utilize `if / else` com `Math.random()` e `break` para implementar essa lógica.
- O loop infinito pode ser implementado utilizando `while(true) {}`.

## 15. Grupo - Ignorando uma iteração de loop

No arquivo `script.js`, siga as etapas abaixo:

- A cada iteração, incremente uma variável **contador**. Inicie com o valor **0** (zero).
- A cada iteração, a variável **contador** deve ser incrementada em 1.
- O loop deve continuar infinitamente, mas você deve fazer com que a cada iteração:
    - Exista **75% de chance** da variável contador ser incrementada em 1 (em **1/4** das iterações, o incremento não deve ocorrer).
    - Exista **10% de chance do loop ser finalizado**.

**Obs.:**

- Utilize a estrutura de repetição `while`.
- Utilize `console.log` para exibir o valor do contador a cada iteração.
- Utilize `if / else` com `Math.random()` e `break` para implementar essa lógica.
- O loop infinito pode ser implementado utilizando `while(true) {}`.

## 16. Grupo - Levantando números

No arquivo `script.js`, siga as etapas abaixo:

- Utilizando `while`, faça iterações pedindo o **salário** e o **nome** de cada pessoa.
- No final de cada iteração, pergunte ao usuário se ele deseja continuar. Se ele quiser continuar, repita o loop.
- Quando o usuário encerrar o loop, exiba o **maior salário** e o **nome** dessa pessoa.
