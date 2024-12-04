const frasesDinamicas = [
    'Gostaria de enfatizar que o acompanhamento das preferências de consumo representa uma abertura para a melhoria dos procedimentos normalmente adotados.',
    'Podemos já vislumbrar o modo pelo qual a complexidade dos estudos efetuados aponta para a melhoria das formas de ação.',
    'É importante questionar o quanto o fenômeno da Internet estende o alcance e a importância das diversas correntes de pensamento.',
    'Neste sentido, a valorização de fatores subjetivos cumpre um papel essencial na formulação das condições financeiras e administrativas exigidas.',
    'O cuidado em identificar pontos críticos na consolidação das estruturas desafia a capacidade de equalização das direções preferenciais no sentido do progresso.',
    'Do mesmo modo, o desafiador cenário globalizado pode nos levar a considerar a reestruturação das diversas correntes de pensamento.',
    'O empenho em analisar a revolução dos costumes auxilia a preparação e a composição dos modos de operação convencionais.',
    'Pensando mais a longo prazo, a contínua expansão de nossa atividade aponta para a melhoria do impacto na agilidade decisória.',
    'É importante questionar o quanto a consolidação das estruturas garante a contribuição de um grupo importante na determinação dos relacionamentos verticais entre as hierarquias.',
    'O que temos que ter sempre em mente é que a execução dos pontos do programa acarreta um processo de reformulação e modernização dos procedimentos normalmente adotados.',
    'A prática cotidiana prova que a consulta aos diversos militantes possibilita uma melhor visão global do sistema de formação de quadros que corresponde às necessidades.',
    'No entanto, não podemos esquecer que o comprometimento entre as equipes é uma das consequências de alternativas às soluções ortodoxas.',
    'Assim mesmo, a hegemonia do ambiente político desafia a capacidade de equalização das condições inegavelmente apropriadas.',
    'Todavia, a mobilidade dos capitais internacionais exige a precisão e a definição das novas proposições.',
    'Acima de tudo, é fundamental ressaltar que a revolução dos costumes maximiza as possibilidades por conta do remanejamento dos quadros funcionais.',
    'Por conseguinte, a estrutura atual da organização obstaculiza a apreciação da importância dos métodos utilizados na avaliação de resultados.',
    'Desta maneira, a crescente influência da mídia estende o alcance e a importância das condições financeiras e administrativas exigidas.',
    'Nunca é demais lembrar o peso e o significado destes problemas, uma vez que a determinação clara de objetivos facilita a criação das diretrizes de desenvolvimento para o futuro.',
    'A prática cotidiana prova que a consulta aos diversos militantes afeta positivamente a correta previsão do sistema de participação geral.',
    'O que temos que ter sempre em mente é que a consolidação das estruturas prepara-nos para enfrentar situações atípicas decorrentes dos índices pretendidos.',
    'O empenho em analisar a valorização de fatores subjetivos é uma das consequências dos paradigmas corporativos.',
    'Desta maneira, a execução dos pontos do programa desafia a capacidade de equalização das direções preferenciais no sentido do progresso.',
    'A prática cotidiana prova que a adoção de políticas descentralizadoras auxilia a preparação e a composição dos modos de operação convencionais.',
    'O que temos que ter sempre em mente é que a hegemonia do ambiente político maximiza as possibilidades por conta das condições inegavelmente apropriadas.',
    'Neste sentido, a contínua expansão de nossa atividade obstaculiza a apreciação da importância das novas proposições.',
    'Por conseguinte, a mobilidade dos capitais internacionais exige a precisão e a definição dos relacionamentos verticais entre as hierarquias.',
    'Todavia, a valorização de fatores subjetivos facilita a criação das condições inegavelmente apropriadas.',
    'Assim mesmo, a revolução dos costumes estende o alcance e a importância dos métodos utilizados na avaliação de resultados.',
    'Acima de tudo, é fundamental ressaltar que a consulta aos diversos militantes representa uma abertura para a melhoria dos procedimentos normalmente adotados.',
    'O cuidado em identificar pontos críticos na expansão dos mercados mundiais cumpre um papel essencial na formulação dos índices pretendidos.',
]
let frasesIndex = 0;
let contadorFrases = 0;

const button = document.createElement('button');
button.innerText = 'Adicionar novo parágrafo';
button.addEventListener('click', () => {
    const paragrafo = document.createElement('p');
    if (frasesIndex === frasesDinamicas.length) {
        frasesIndex = 0;
    }
    contadorFrases++;
    paragrafo.textContent = `${contadorFrases}. ${frasesDinamicas[frasesIndex]}`;
    document.body.appendChild(paragrafo);
    frasesIndex++;

});

document.body.appendChild(button);