import './App.css'

export default function App() {
    const book = {
        title: "JavaScript: O Guia Definitivo",
        author: "David Flanagan",
        releadeYear: 2020,
        chapters: [
            "Introdução ao JavaScript",
            "Estrutura Léxica",
            "Tipos de Dados e Valores",
            "Variáveis",
            "Expressões e Operadores",
            "Declarações",
            "Funções",
            "Objetos",
            "Classes",
            "Módulos"
        ]
    };

    return (
        <>
            <h1>{book.title}</h1>
            <h2>Por {book.author}</h2>
            <p>Ano de Lançamento: {book.releadeYear}</p>
            <h3>Capítulos:</h3>
            <ul>
                {book.chapters.map((chapter) => (
                    <li>{chapter}</li>
                ))}
            </ul>
        </>
    )
}