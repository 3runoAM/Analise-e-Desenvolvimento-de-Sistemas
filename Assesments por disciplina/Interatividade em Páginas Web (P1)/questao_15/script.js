const input = document.getElementById('nome');
const button = document.querySelector('button');
const secao = document.querySelector('section');

button.addEventListener('click', () => {
    if(input.value){
        fetch(`https://dadosabertos.camara.leg.br/api/v2/deputados?nome=${input.value}&itens=3&ordem=ASC&ordenarPor=nome`)
            .then(response => response.json())
            .then(data => data.dados)
            .then(dados => {
                secao.innerHTML = '';
                if(dados.length > 0) {
                    dados.forEach((deputado) => {
                        const h2 = document.createElement('h2');
                        h2.textContent = deputado.nome;

                        const partido = document.createElement('p');
                        partido.textContent = `Partido: ${deputado.siglaPartido}`;

                        const uf = document.createElement('p');
                        uf.textContent = `UF: ${deputado.siglaUf}`;

                        const infoContainer = document.createElement('div');
                        infoContainer.append(h2, partido, uf)

                        const img = document.createElement('img');
                        img.setAttribute('src', deputado.urlFoto);

                        const cardContainer = document.createElement('div');
                        cardContainer.className = 'card';
                        cardContainer.append(infoContainer, img);

                        secao.append(cardContainer);
                    })
                } else {
                    const p = document.createElement('p');
                    secao.innerHTML =  'Nenhum deputado encontrado';
                }
                input.value = '';
            })
            .catch(error => {
                console.error(error);
            });
    }
});