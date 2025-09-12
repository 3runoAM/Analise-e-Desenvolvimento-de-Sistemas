export default function BookList({data, selectBook}) {

    return (<>
        <section style={{
            display: "flex", flexDirection: "column", alignItems: "center", gap: "2em", overflow: "auto"
        }}>
            <h2>Lista de livros</h2>
            <ul style={{
                display: "flex",
                justifyContent: "center",
                width: "90%",
                gap: "0.5rem",
                flexWrap: "wrap",
                overflow: "auto",
                padding: "1rem",
            }}>
                {data.map((livro) => {
                    return <li style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        padding: "1rem",
                        gap: "0.5rem",
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                        width: "15rem",
                        boxShadow: "0 4px 2px #5e5e5e",
                        cursor: "pointer",
                    }} onClick={() => {
                        selectBook(livro)
                    }}>
                        <h3 style={{
                            maxWidth: "100%", textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden",
                        }}>{livro.titulo}</h3>
                        <p>Autor: {livro.autor}</p>
                        <p>Gênero: {livro.genero}</p>
                        <p>Páginas: {livro.paginas}</p>
                        <p>Avaliação: {"⭐".repeat(livro.avaliacao)} ({livro.avaliacao})</p>
                    </li>
                })}
            </ul>
        </section>
    </>)
}