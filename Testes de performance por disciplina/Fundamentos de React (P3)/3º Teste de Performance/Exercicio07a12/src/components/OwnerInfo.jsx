export default function OwnerInfo({data, pageAverage}) {
    const genreCount = {};
    data.livros.forEach(book => {
        if (genreCount[book.genero]) {
            genreCount[book.genero]++;
            return;
        }
        genreCount[book.genero] = 1;
    });

    const mostCommonGenreEntrie = Object.entries(genreCount) // traz os dados assim => [[Título (index 0), Contagem (index 1)], [Título, Contagem]]
        .reduce((mostCommonGenre, currentGenre) => {
            return mostCommonGenre[1] > currentGenre[1] ? mostCommonGenre : currentGenre
        }, ["Nenhum gênero", 0]);

    return (
        <section style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "2em"  }}>
            <h1>Biblioteca Pessoal de {data.proprietario}</h1>
            <table style={{borderCollapse: "collapse", width: "40%" }}>
                <tbody>
                    <tr>
                        <td style={{fontWeight: "bold"}}>Livros na biblioteca</td>
                        <td style={{fontWeight: "bold"}}>{data.livros.length}</td>
                    </tr>
                    <tr>
                        <td style={{fontWeight: "bold"}}>Média de páginas por livro</td>
                        <td style={{fontWeight: "bold"}}>{pageAverage.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td style={{fontWeight: "bold"}}>Gênero mais comum</td>
                        <td style={{fontWeight: "bold"}}>{mostCommonGenreEntrie[0]}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}



