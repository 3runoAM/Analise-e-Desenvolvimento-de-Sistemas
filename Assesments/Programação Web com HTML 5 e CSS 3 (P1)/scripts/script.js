const projectsContainer = document.getElementById('repos-container');

fetch('https://api.github.com/users/3runoAM/repos')
    .then(response => response.json())
    .then(result => {
        result.forEach(repo => {
            if(repo.language) {
                let fragment = document.createDocumentFragment();

                const article = document.createElement('article');

                // Header
                const header = document.createElement('header');

                const h3Header = document.createElement('h3');
                h3Header.innerText = repo.name;

                const pHeader = document.createElement('p');
                pHeader.innerText = repo.description;

                header.appendChild(h3Header);
                header.appendChild(pHeader);
                article.appendChild(header);

                // p
                const p = document.createElement('p');
                p.innerText = `Linguagem Principal: ${repo.language}`;

                article.appendChild(p)

                // footer
                const footer = document.createElement('footer');

                const repoLink = document.createElement('a');
                repoLink.href = repo.html_url;
                repoLink.innerText = 'Acessar Repositório';

                footer.appendChild(repoLink);
                article.appendChild(footer);

                fragment.appendChild(article);
                projectsContainer.appendChild(fragment);
            }})})
    .catch(error => console.log(error));