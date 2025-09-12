import './App.css';
import PersonalLibrary from "./components/PersonalLibrary";

export default function App() {
    const libraryData = {
        proprietario: "Bruno Martins",
        totalLivros: 18,
        livros: [
            {
                titulo: "Duna",
                autor: "Frank Herbert",
                genero: "Ficção Científica",
                paginas: 896,
                avaliacao: 4.5
            },
            {
                titulo: "Fundação",
                autor: "Isaac Asimov",
                genero: "Ficção Científica",
                paginas: 255,
                avaliacao: 5
            },
            {
                titulo: "Neuromancer",
                autor: "William Gibson",
                genero: "Cyberpunk",
                paginas: 271,
                avaliacao: 4.5
            },
            {
                titulo: "O Fim da Infância",
                autor: "Arthur C. Clarke",
                genero: "Ficção Científica",
                paginas: 224,
                avaliacao: 4
            },
            {
                titulo: "O Guia do Mochileiro das Galáxias",
                autor: "Douglas Adams",
                genero: "Ficção Científica Cômica",
                paginas: 208,
                avaliacao: 5
            },
            {
                titulo: "Hyperion",
                autor: "Dan Simmons",
                genero: "Ficção Científica",
                paginas: 482,
                avaliacao: 5
            },
            {
                titulo: "O Jogo do Exterminador",
                autor: "Orson Scott Card",
                genero: "Ficção Científica",
                paginas: 324,
                avaliacao: 4
            },
            {
                titulo: "Snow Crash",
                autor: "Neal Stephenson",
                genero: "Cyberpunk",
                paginas: 440,
                avaliacao: 4
            },
            {
                titulo: "A Mão Esquerda da Escuridão",
                autor: "Ursula K. Le Guin",
                genero: "Ficção Científica",
                paginas: 304,
                avaliacao: 5
            },
            {
                titulo: "O Conto da Aia",
                autor: "Margaret Atwood",
                genero: "Distopia",
                paginas: 311,
                avaliacao: 4.5
            },
            {
                titulo: "1984",
                autor: "George Orwell",
                genero: "Distopia",
                paginas: 328,
                avaliacao: 5
            },
            {
                titulo: "Admirável Mundo Novo",
                autor: "Aldous Huxley",
                genero: "Distopia",
                paginas: 288,
                avaliacao: 4
            },
            {
                titulo: "Fahrenheit 451",
                autor: "Ray Bradbury",
                genero: "Distopia",
                paginas: 194,
                avaliacao: 4.5
            },
            {
                titulo: "Laranja Mecânica",
                autor: "Anthony Burgess",
                genero: "Distopia",
                paginas: 192,
                avaliacao: 4
            },
            {
                titulo: "Monalisa Overdrive",
                autor: "William Gibson",
                genero: "Cyberpunk",
                paginas: 368,
                avaliacao: 4
            },
            {
                titulo: "CountZero",
                autor: "William Gibson",
                genero: "Cyberpunk",
                paginas: 320,
                avaliacao: 4.5
            },
            {
                titulo: "Crepúsculo",
                autor: "Stephenie Meyer",
                genero: "Romance",
                paginas: 498,
                avaliacao: 3.5
            },
            {
                titulo: "Orgulho e Preconceito",
                autor: "Jane Austen",
                genero: "Romance",
                paginas: 279,
                avaliacao: 4.5
            },
            {
                titulo: "Lua Nova",
                autor: "Stephenie Meyer",
                genero: "Romance",
                paginas: 563,
                avaliacao: 3.5
            },
            {
                titulo: "Eclipse",
                autor: "Stephenie Meyer",
                genero: "Romance",
                paginas: 629,
                avaliacao: 3.5
            },
            {
                titulo: "Amanhecer",
                autor: "Stephenie Meyer",
                genero: "Romance",
                paginas: 756,
                avaliacao: 3
            },
            {
                titulo: "A Culpa é das Estrelas",
                autor: "John Green",
                genero: "Romance",
                paginas: 313,
                avaliacao: 4.5
            },
            {
                titulo: "It - A Coisa",
                autor: "Stephen King",
                genero: "Terror",
                paginas: 1138,
                avaliacao: 4.5
            },
            {
                titulo: "O Iluminado",
                autor: "Stephen King",
                genero: "Terror",
                paginas: 447,
                avaliacao: 5
            },
            {
                titulo: "Drácula",
                autor: "Bram Stoker",
                genero: "Terror",
                paginas: 418,
                avaliacao: 4
            },
            {
                titulo: "Frankenstein",
                autor: "Mary Shelley",
                genero: "Terror",
                paginas: 280,
                avaliacao: 4.5
            }
        ]
    }
    return (
        <>
            <PersonalLibrary data={libraryData}></PersonalLibrary>
        </>
    );
}