# Descrição das Questões do TP1

1. **Iniciando em JavaScript**
   - Nesse exercício, crie um código Javascript, que mostre a expressão “Olá mundo!”.
   - Use a função “alert” para realizar o código.
   - Modifique apenas o arquivo index.html na área indicada.

2. **Utilizando console**
   - Nesse exercício, crie um código Javascript, que mostre a expressão “Oi desenvolvedor!”.
   - Use a função “console.log” para realizar o código.
   - Modifique apenas o arquivo index.html.

3. **Código em arquivo**
   - Nesse exercício, crie um código Javascript, que mostre a expressão “Olá mundo! Falo do arquivo script.js”.
   - Crie um arquivo com o nome script.js.
   - Referencie este arquivo no index.html.
   - Use a função alert() para realizar o código dentro deste arquivo.
   - O código precisa ficar em um arquivo script.js, separado do index.html.
   - A expressão deve ser mostrada em um pop-up.
   - Modifique o arquivo index.html na área indicada.
   - Não esqueça de conectar o novo arquivo à página principal.

4. **Vamos criar variáveis**
   - No arquivo scripts.js, crie uma variável chamada “minhaNotaNoTp” e atribua o número 10 a ela. Exiba esta variável em um alert() e no console.log().
   - Utilize a palavra reservada ‘let’, para declarar uma variável.

5. **Vamos trabalhar com prompt**
   - Nesse exercício, crie um código Javascript, que mostre a expressão “Olá mundo!”.
   - Use a função prompt(), para perguntar “Como você está hoje?” ao usuário.
   - O texto que foi digitado no prompt(), deve ser guardado em uma variável nomeada “resposta_usuario”.
   - Imprima a “resposta_usuario” com a função console.log().
   - Os códigos necessitam ser inseridos no arquivo script.js.

6. **Números aleatórios**
   - Crie um código que imprima no console um número gerado aleatoriamente.

7. **Operações matemáticas**
   - Vamos a um desafio! Crie um programa que realize os seguintes passos:
     - Solicite um número com prompt, e guarde o que foi digitado em uma variável “primeiroNumero”;
     - Solicite um segundo número via prompt, e guarde o que foi digitado em uma variável “segundoNumero”;
     - Mostre o resultado de cada uma das quatro operações principais no console, no formato “operação: resultado”, onde operação é a operação utilizada e resultado é o resultado da operação. As operações que devem ser feitas são "adição", "subtração", "multiplicação" e "divisão".
   - É necessário converter os números digitados no prompt para o tipo number, ou as operações matemáticas não vão funcionar corretamente. Exemplo:
     ```
     let primeiroNumero = prompt("Digite o primeiro número:");
     let primeiroNumeroConvertido = Number(primeiroNumero);
     ```

8. **Arquivo JavaScript**
   - Siga as etapas abaixo:
     - Crie um código Javascript, que exibe a mensagem "Olá desenvolvedor".
     - Crie outro código, que exiba a mensagem "Olá usuário".
     - Os itens 1 e 2 devem estar apenas no head da página HTML.
     - Exiba a mensagem do item 1 no console.
     - Exiba a mensagem do item 2 numa caixa de alerta.
     - Não deve utilizar o arquivo .js.

9. **Energia Cinética**
   - Crie um programa que realize o cálculo da energia cinética. Para isto:
     - Solicite um número com prompt que represente a massa.
     - Solicite um número com prompt que represente a velocidade.
     - Exiba em um alerta a energia cinética total.
   - Os códigos necessitam ser inseridos no arquivo script.js
   - A fórmula está no Replit.

10. **Carregando múltiplos arquivos**
    - Siga as etapas abaixo:
      - Crie 2 arquivos com código JavaScript, chamados script1.js e script2.js.
      - Link os arquivos script1.js e script2.js, no head da página HTML.
      - No arquivo script1.js, mostre um alert com a mensagem "Olá usuário!".
      - Já no arquivo script2.js, mostre um console.log com a mensagem "Olá desenvolvedor!".

11. **Velocidade média**
    - Crie um programa que realize o cálculo da velocidade média. A fórmula é:
      ```
      Vm = dist/t
      ```
      Onde: Vm é a velocidade média, dist é à distância percorrida e t é o tempo.
    - Para isto:
      - Solicite os valores utilizados na fórmula ao usuário com prompt.
      - Exiba em um alerta o resultado da aplicação da fórmula.

12. **Grupo - Comentários**
    - No arquivo script.js, responda às seguintes questões usando os operadores de comentários (// ou /* */):
      - O que é programação?
      - O que é Javascript?
      - Qual a função do Javascript em um navegador Web? (responda usando pelo menos três linhas e os operadores /* e */).
    - As questões 1 e 2, devem ser respondidas em apenas uma linha com //
    - A questão 3, deve ser respondida em pelo menos três linhas com /* e */

13. **Grupo - Boas práticas**
    - Formate o código de script.js de modo a corrigir a indentação. Siga a etapa a seguir:
      - Quebre as declarações em mais de uma linha.
      - Utilize espaços, para evidenciar trechos de códigos aninhados.
    - Utilize “tab” para aninhar as linhas de código.
    - As declarações estão usando a palavra reservada “let”.
    - Siga o exemplo que está no Replit.

14. **Grupo - Fórmulas da física**
    - Crie um programa que realize o cálculo da força (Lei de Newton) e da potência. A fórmula da força é:
      ```
      F = m.ac
      ```
      Onde: F é a força, m é a massa do objeto e ac é a aceleração.
    - A fórmula da potência é:
      ```
      P = W/t
      ```
      Onde: P é a potência, W é o trabalho realizado e t é o tempo.
    - Para isto:
      - Solicite os valores utilizados nas fórmulas ao usuário com prompt.
      - Exiba em um alerta o resultado de cada fórmula.

15. **Grupo - Trabalhando com comentários**
    - Siga as etapas abaixo:
      - Adicione comentários no arquivo script.js.
      - O resultado deve mostrar o número 10 no alert.
    - Não crie outros arquivos, apenas utilize os arquivos presentes no Files.
    - Não adicione novas linhas de código ou altere o conteúdo das linhas já existentes.

16. **Grupo - Atribuição de valores**
    - Os operadores de `pré` e `pós` `incremento` e `decremento` são operadores **unários** em JavaScript, que são usados para `aumentar` ou `diminuir` o valor de uma variável em 1.
    - **INCREMENTO:**
      - O `pré-incremento` é representado pelo operador `"++"` antes da variável.
      - O `pós-incremento` é representado pelo operador `"++"` depois da variável.
      - **EXEMPLO:**
        ```
        let x = 5;
        console.log(++x); // 6 (pré-incremento)
        console.log(x); // 6

        console.log(x++); // 5 (pós-incremento)
        console.log(x); // 6
        ```
    - **DECREMENTO:**
      - O `pré-decremento` é representado pelo operador `"--"` antes da variável.
      - O `pós-decremento` é representado pelo operador `"--"` depois da variável.
      - **EXEMPLO:**
        ```
        let x = 5;
        console.log(--x); // 4 (pré-decremento)
        console.log(x); // 4

        console.log(x--); // 5 (pós-decremento)
        console.log(x); // 4
        ```
    - Siga as etapas abaixo:
      - Modifique os valores das variáveis, no arquivo script.js.
      - O total no console.log(), deve ser o número 12.
    - Não crie outros arquivos, apenas utilize os arquivos presentes no Files.
    - Não modifique os cálculos, somente as atribuições que estão logo abaixo de // Modifique aqui os valores!
    - No Replit têm uma revisão sobre incremento e decremento.