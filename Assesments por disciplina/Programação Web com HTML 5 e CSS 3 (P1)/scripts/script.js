const projectsContainer = document.getElementById("repos-container");
const fragment = document.createDocumentFragment();

fetch("https://api.github.com/users/3runoAM/repos")
  .then((response) => response.json())
  .then((result) => {
    result.forEach((repo) => {
      if (repo.language) {
        const article = document.createElement("article");
        article.classList.add("background-highlight", "flex-column");

        // Header
        const header = document.createElement("header");
        header.classList.add("flex-column");

        const h3Header = document.createElement("h3");
        h3Header.innerText = repo.name;
        h3Header.classList.add("limited-text");

        const pHeader = document.createElement("p");
        pHeader.innerText = repo.description;
        pHeader.classList.add("limited-text");

        header.appendChild(h3Header);
        header.appendChild(pHeader);
        article.appendChild(header);

        // p
        const p = document.createElement("p");
        p.innerHTML = `Linguagem Principal: <span class='red'>${repo.language}<span>`;

        article.appendChild(p);

        // footer
        const footer = document.createElement("footer");

        const repoLink = document.createElement("a");

        repoLink.href = repo.html_url;
        repoLink.innerText = "Acessar Repositório";
        repoLink.target = "_blank";
        repoLink.classList.add('underline')

        footer.appendChild(repoLink);
        article.appendChild(footer);

        fragment.appendChild(article);
      }
    });
  })
  .then(() => {
    projectsContainer.appendChild(fragment);
  })
  .catch((error) => console.log(error));


