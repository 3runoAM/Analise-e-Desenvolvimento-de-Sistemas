import './App.css';
import Header from "./components/header/Header";
import ResearchList from "./components/researchList/ResearchList";
import {useState} from "react";


export default function App() {
    const [formVisibility, setFormVisibility] = useState(false);

    function toggleFormVisibility() {
        setFormVisibility(!formVisibility);
    }

    const projects = [
        {
        id: "Assessment-25E3",
        title: "ResearchFlow - Sistema de Gestão de Projetos Acadêmicos",
        researcher: "Bruno Martins",
        status: true,
        startDate: new Date("2025-09-17"),
        description: "Desenvolvimento de uma plataforma web para centralizar o acompanhamento e avaliação de projetos de pesquisa acadêmicos."
    },
        {
            id: "Assessment-25E3",
            title: "Página de portfólio pessoal",
            researcher: "Bruno Martins",
            status: true,
            startDate: new Date("2025-09-17"),
            description: "Você deverá recriar uma página de portfólio pessoal, baseada em uma proposta de layout fornecida" +
                " via Figma, utilizando React. O foco principal será na componentização, na criação de um design" +
                " responsivo e na personalização do conteúdo."
        },
        {
            id: "Projeto-De-Bloco-2025.2",
            title: "Pokédex interativa",
            researcher: "Bruno Martins",
            status: true,
            startDate: new Date("2025-09-17"),
            description: "A Pokédex Interativa é uma aplicação que consome a PokéAPI para exibir informações sobre Pokémon." +
                " Usuários autenticados podem criar, editar e excluir times personalizados, com uma interface temática e responsiva."
            }
        ];

    return (
        <>
            <Header></Header>
            
            <button onClick={toggleFormVisibility}>Mostrar formulário</button>
            {
                formVisibility ?
                    <form action="">
                        <label htmlFor=""></label>
                        <input type="text"/>
                    </form> : null
            }
            
            <ResearchList projects={projects}></ResearchList>
       </>
    );
}