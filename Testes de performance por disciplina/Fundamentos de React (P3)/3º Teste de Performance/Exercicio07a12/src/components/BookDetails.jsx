export default function BookDetails({book, unselectBook}) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
        }}>
            <button style={{
                padding: "0.5rem 1rem",
                cursor: "pointer",
            }} onClick={unselectBook}>Voltar
            </button>
            <table style={{
                width: "20%",
                padding: "1rem",
                border: "1px solid #ccc",
                borderRadius: "8px",
                boxShadow: "0 4px 2px #5e5e5e",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.5rem",
            }}>
                <thead>
                <tr>
                    <th colSpan="2">Detalhes do Livro</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Título:</td>
                        <td>{book.titulo}</td>
                    </tr>
                    <tr>
                        <td>Autor:</td>
                        <td>{book.autor}</td>
                    </tr>
                    <tr>
                        <td>Gênero:</td>
                        <td>{book.genero}</td>
                    </tr>
                    <tr>
                        <td>Páginas:</td>
                        <td>{book.paginas}</td>
                    </tr>
                    <tr>
                        <td>Avaliação:</td>
                        <td>{"⭐".repeat(book.avaliacao)} ({book.avaliacao})</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}