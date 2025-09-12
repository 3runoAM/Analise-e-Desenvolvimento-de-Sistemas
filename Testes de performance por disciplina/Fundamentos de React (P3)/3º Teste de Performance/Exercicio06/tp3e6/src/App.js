import './App.css';
import ReportCard from "./components/ReportCard";

export default function App() {
    const STUDENT_DATA = {
        nome: "Ana Silva Oliveira",
        matricula: "2023001234",
        responsavel: "Maria Oliveira",
        disciplinas: [
            {
                nome: "Matemática",
                docente: "Prof. Carlos Santos",
                notas: [
                    {prova: "P1 - Primeira Unidade", nota: 8.5},
                    {prova: "P2 - Segunda Unidade", nota: 9.0},
                    {prova: "Prova Final", nota: 8.8}
                ]
            },
            {
                nome: "Português",
                docente: "Prof.ª Claudia Mendes",
                notas: [
                    {prova: "P1 - Primeira Unidade", nota: 7.5},
                    {prova: "P2 - Segunda Unidade", nota: 8.0},
                    {prova: "Redação", nota: 9.5}
                ]
            }
        ]
    };

    return (
        <>
            <ReportCard studentData={STUDENT_DATA}></ReportCard>
        </>
    );
}