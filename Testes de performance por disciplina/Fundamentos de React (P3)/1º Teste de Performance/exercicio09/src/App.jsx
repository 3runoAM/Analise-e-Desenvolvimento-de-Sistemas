import './App.css'

export default function App() {
    const listaDeTarefas = ["Fazer compras no supermercado", "Responder e-mails importantes", "Estudar JavaScript por 1 hora", "Agendar consulta médica", "Fazer exercícios físicos", "Ler capítulo do livro", "Preparar relatório do trabalho", "Ligar para os pais", "Organizar armário", "Planejar viagem do fim de semana"];

    return (<>
        <h1>Lista de Tarefas</h1>
        <ul>
            {listaDeTarefas.map(item => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    </>)
}