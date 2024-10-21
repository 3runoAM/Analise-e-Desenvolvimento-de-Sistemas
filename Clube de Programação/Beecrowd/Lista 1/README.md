# Questões do Clube de Programação: Lista 1

---

## Problema 1: beecrowd | 1000 - Welcome to beecrowd!

The first program you usually write in any programming language is "Hello World!". In this problem, all you need to do is print this message on the screen.

### Input
- **There is no input for this problem.**

### Output
- Print the message `Hello World!` followed by a newline character.

### Exemplo

| Input Sample | Output Sample   |
|--------------|-----------------|
| *(no input)* | Hello World!    |

---

## Problema 2: beecrowd | 1001 - Extremely Basic

Neste problema, você deverá ler duas variáveis inteiras, `A` e `B`, calcular a soma delas e armazenar o resultado na variável `X`. O objetivo é imprimir `X` no formato especificado.

### Input
- A entrada consiste de dois números inteiros.

### Output
- Imprima a variável `X` no formato: `X = [soma]`, onde `[soma]` é a soma dos dois valores de entrada.
- Inclua um espaço antes e depois do sinal de igual.
- Não se esqueça do newline após o resultado para evitar "Presentation Error."

### Exemplos

| Samples Input | Samples Output |
|---------------|----------------|
| 10 9          | X = 19         |
| -10 4         | X = -6         |
| 15 -7         | X = 8          |

---

## Problema 3: beecrowd | 1149 - Summing Consecutive Integers

Escreva um algoritmo para ler um valor `A` e um valor `N`, em seguida, imprima a soma de `N` inteiros consecutivos começando de `A` (inclusivo). Caso `N` seja negativo ou zero, você deverá ler um novo valor para `N`. Todos os valores de entrada são fornecidos na mesma linha.

### Input
- A entrada contém valores inteiros que podem ser positivos ou negativos.

### Output
- A saída deverá ser um único valor inteiro representando a soma.

### Exemplos

| Input Sample        | Output Sample |
|---------------------|---------------|
| 3 2                 | 7             |
| 3 -1 0 -2 2         | 72            |

---

## Problema 4: beecrowd | 1173 - Array Fill I

Leia um número e faça um programa que coloque esse número na primeira posição de um array `N[10]`. Em cada posição subsequente, coloque o dobro do valor da posição anterior. Por exemplo, se o número de entrada for 1, os números no array devem ser 1, 2, 4, 8, e assim por diante.

### Input
- The input contains an integer number `V` (V < 50).

### Output
- Print the stored number of each array position in the form "N[i] = X", where `i` is the position of the array and `X` is the stored number at the position `i`. The first number for `X` is `V`.

### Examples

| Input Sample | Output Sample         |
|--------------|-----------------------|
| 1            | N[0] = 1              |
|              | N[1] = 2              |
|              | N[2] = 4              |
|              | ...                   |

---
Got it! Here’s the properly formatted text for Problem 5, keeping everything in English as specified:

---

## Problema 5: beecrowd | 1306 - Numbering Roads

In my country, streets don’t have names; each of them is just given a number as a name. These numbers are supposed to be unique, but that is not always the case. The local government allocates some integers to name the roads, and in many cases, the number of integers allocated is less than the total number of roads. In that case, to make road names unique, some single character suffixes are used. So roads are named as 1, 2, 3, 1A, 2B, 3C, etc. Of course, the number of suffixes is also always limited to 26 (A, B, …, Z). For example, if there are 4 roads and 2 different integers allocated for naming, some possible assignments of names can be:

- 1, 2, 1A, 2B
- 1, 2, 1A, 2C
- 3, 4, 3A, 4A
- 1, 2, 1B, 1C

Given the number of roads (R) and the number of integers allocated for naming (N), your job is to determine the minimum number of different suffixes that will be required (of all possible namings) to name the streets, assuming that two streets can't have the same names.

### Input
The input file can contain up to 10002 lines of inputs. Each line contains two integers R and N (R < 10001, 0 < N). Here R is the total number of streets to be named and N denotes the number of integers allocated for naming. The end of input is determined by '0 0' and must not be processed.

### Output
Each line of input produces one line of output. This line contains the serial of output followed by an integer D which denotes the minimum number of suffixes required to name the streets. If it is not possible to name all the streets, print “impossible” instead (without the quotes).

### Sample Input / Sample Output

| Sample Input | Sample Output       |
|--------------|---------------------|
| 8 5          | Case 1: 1           |
| 100 2        | Case 2: impossible  |
| 0 0          |                     |

---

Here’s the properly formatted text for Problem 6:

---

## beecrowd | 1445 - Who's Going To The Party?

By Lucas Hermann Negri, UDESC, Brasil

Timelimit: 3 seconds

The drizzle that fell last week made Professor Claudius Virux feel homesick for his time as a student of UFCG at Campina Grande - Pb. There, winter is a period marked by little rains (similar to those in Joinville), with cold nights.

At the university, the students' parties, occurring almost every Friday and Saturday, were big deals. The most interesting aspect was that the most unusual people were present—poets, singers, teachers, and other artists, as well as the students. There was always a reason to throw a party; if there wasn't, the reason was to celebrate the tough week at the university.

The most curious part was the system of how the host invited friends. The owner of the house invited immediate friends, who then invited others, and so on. On the day of the party, the host wanted to know his/her new friends to see how the chain of invitation had propagated.

To keep track of how many guests were present at each party, the host asked everyone who arrived to write down his/her name and the name of the person who had invited him/her.

### Input
For each party, there will be a number of relationships between the guests. This is a value **N** written before the relationships, which follow in pairs of the form (x, y) = (y, x). Here, **x** is the name of a friend and **y** is his guest. The values of **x** and **y** are numbered from 1 to 1000, and the host number is always 1.

When **N** is equal to 0, this indicates the end of the party! The format of the input follows the standards below.

### Output
For each set of relationships, print the total number of participants at the party, including the host. Print the total for each party on a new line. Do not print anything for input 0.

### Sample Input / Sample Output

| Sample Input                             | Sample Output |
|------------------------------------------|---------------|
| 3                                        | 3             |
| (1,2) (2,3) (4,5)                        |               |
| 3                                        | 1             |
| (2,3) (3,4) (4,5)                        |               |
| 5                                        | 5             |
| (1,2) (5,2) (6,5) (5,4) (4,3)            |               |
| 0                                        | 6             |

---
