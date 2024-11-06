const footballTeam = prompt("Qual o nome do time de futebol?");

const winsCount = getTeamResult("vitórias");
const drawsCount = getTeamResult("empates");
const lossesCount = getTeamResult("derrotas");

showTeamMetrics(footballTeam, winsCount, drawsCount, lossesCount);

/**/

function showTeamMetrics(footballTeam, winsCount, drawsCount, lossesCount){
    let points = winsCount * 3 + drawsCount;
    let totalGames = winsCount + drawsCount + lossesCount;

    console.log(`O time ${footballTeam} fez ${points} pontos em ${totalGames} jogos.`);
}

function getTeamResult(resultType){
    let result;

    do {
        result = prompt(`Qual a quantidade de ${resultType}?`);
    } while (result === "" || isNaN(result));

    return Number(result);
}