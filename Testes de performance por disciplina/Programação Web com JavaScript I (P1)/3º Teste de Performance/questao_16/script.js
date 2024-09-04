const strainer = ["Torrar o café", "Moer o café","Ferver a água", "Colocar o café no coador", "Colocar a água no coador", "Esperar a água passar pelo café", "Servir o café"];
const frenchPress = ["Torrar o café", "Moer o café", "Ferver a água","Colocar o café na prensa francesa", "Colocar a água na prensa francesa", "Esperar 4 minutos", "Pressionar o filtro", "Servir o café"];
const mokPot = ["Torrar o café", "Moer o café", "Colocar a água na parte de baixo da cafeteira", "Colocar o café no filtro", "Colocar o filtro na parte de cima da cafeteira", "Montar a cafeteira", "Colocar a cafeteira no fogo", "Esperar a água subir", "Servir o café"];

const userChoice = prompt('Qual método de preparo de café você deseja?\n1- Coador\n2- Prensa francesa\n3- Cafeteira italiana');
coffeeMaker(userChoice);

function coffeeMaker(userChoice) {
    let stepChoice = 0;
    switch (userChoice) {
        case '1':
            stepChoice = Number(prompt(`Preparação no coador tem 7 passos. Por qual gostaria de começar de 1 à 7?`));
            if(stepChoice <= 0 || stepChoice > 7 || isNaN(stepChoice)){
                showSteps('strainer', 1)
                break;
            }
            showSteps('strainer', stepChoice);
            break;
        case '2':
            stepChoice = Number(prompt(`Preparação na prensa francesa tem 8 passos. Por qual gostaria de começar de 1 à 8?`));
            if(stepChoice <= 0 || stepChoice > 8 || isNaN(stepChoice)){
                showSteps('frenchPress', 1)
                break;
            }
            showSteps('frenchPress', stepChoice);
            break;
        case '3':
            stepChoice = Number(prompt(`Preparação na cafeteira italiana tem 9 passos. Por qual gostaria de começar de 1 à 9?`));
            if(stepChoice <= 0 || stepChoice > 9 || isNaN(stepChoice)){
                showSteps('mokPot', 1)
                break;
            }
            showSteps('mokPot', stepChoice);
            break;
        default:
            alert("Opção inválida! Tente novamente.");
    }
}
function showSteps(methodChoosed, stepChoosed) {
    stepChoosed -= 1;
    let steps = '';
    switch (methodChoosed) {
        case 'strainer':
            for(let i = stepChoosed; i < strainer.length; i++) {
                steps += `${i + 1}: ${strainer[i]}\n`;
            }
            alert(steps);
            break;
        case 'frenchPress':
            for(let i = stepChoosed; i < frenchPress.length; i++) {
                steps += `${i + 1}: ${frenchPress[i]}\n`;
            }
            alert(steps);
            break;
        case 'mokPot':
            for(let i = stepChoosed; i < mokPot.length; i++) {
                steps += `${i + 1}: ${mokPot[i]}\n`;
            }
            alert(steps);
            break;
    }
}