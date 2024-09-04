const x = Number(prompt('Escolha uma opção de ordenação:\n1- Ordem crescente\n2- Ordem decrescente\n3- Maior valor no centro\nDigite o número da opção desejada: '));
const a = Number(prompt('Digite o primeiro número: '));
const b = Number(prompt('Digite o segundo número: '));
const c = Number(prompt('Digite o terceiro número: '));

const values = [a, b, c];

switch (x) {
    case 1:
        alert(`Aqui estão os valores em ordem crescente: ${values.sort((a, b) => a - b)}`);
        break;
    case 2:
        alert(`Aqui estão os valores em ordem decrescente: ${values.sort((a, b) => b - a)}`);
        break;
    case 3:
        values.sort((a, b) => a - b);
        alert(`Aqui estão os valores com o maior valor no centro: ${values[0]}, ${values[2]}, ${values[1]}`);
        break;
    default:
        alert('O valor de x não corresponde a nenhuma das condição.');
        break;
}