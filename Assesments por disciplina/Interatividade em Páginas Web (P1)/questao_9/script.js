const botao = document.querySelector('button');
const frases = [
    "Click me",
    "Haz clic en mí",
    "Cliquez sur moi",
    "Klicke auf mich",
    "Clicca su di me",
    "Κάνε κλικ σε μένα",
    "私をクリックしてください",
    "Нажми на меня",
    "點擊我",
    "클릭 해주세요",
    "Kliknij mnie",
    "Klik på mig",
    "クリックしてね",
    "Pritisnite me",
    "Klik på mig",
    "Kliknij mnie",
    "S'il vous plaît, cliquez sur moi",
    "प्रेस करें",
    "मेरे पर क्लिक करें",
    "আমাকে ক্লিক করুন",
    "คลิกที่ฉัน",
    "Tap me",
    "Tap here",
    "클릭하세요",
    "Machen Sie einen Klick auf mich",
    "Toca sobre mí",
    "Klikni na mě",
    "Když klikneš na mě",
    "Prøv å klikke på meg"
];
let frasesIndex = 0;

botao.addEventListener('click', () => {
    console.log('Oi! Você clicou no botão');
    if(frasesIndex >= frases.length) frasesIndex = 0;
    mudaTextoBotao(botao, frases, frasesIndex);
    frasesIndex++;
});

function mudaTextoBotao(botao, frases, frasesIndex) {
    botao.textContent = frases[frasesIndex];
}


const paragrafo = document.querySelector('p');
paragrafo.addEventListener('mouseenter', (e) => mudaEstilizacaoParagrafo(e.target));
paragrafo.addEventListener('mouseleave', (e) => mudaEstilizacaoParagrafo(e.target));

function mudaEstilizacaoParagrafo(paragrafo){
    paragrafo.classList.toggle('mouse-enter');
}