import {useEffect, useState} from "react";
import Header from "../components/header/Header";
import ResearchList from "../components/researchList/ResearchList";
import ProjectForm from "../components/projectForm/ProjectForm";
import ProjectDetails from "../components/projectDetails/ProjectDetails";
import FilterBar from "../components/filterBar/filterBar";

export default function Dashboard() {
    const [projectList, setProjectList] = useState([]);
    const [formVisibility, setFormVisibility] = useState(false);
    const [selectedProjectId, setSelectedProjectId] = useState(null);
    const [filter, setFilter] = useState("Todos");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    async function fetchProjects() {
        setLoading(true);
        setError(null);
        await fetch('/projects.json')
            .then(response => response.json())
            .then(data => setProjectList(data))
            .catch(err => console.log(err));
        setLoading(false);
    }

    useEffect(() => {
        fetchProjects();
    }, []);


    const filteredProjectList = projectList.filter(project => {
        if (filter === "Todos") return true;
        if (filter === "Ativos") return project.status;
        if (filter === "Inativos") return !project.status;
        return true;
    });

    function toggleFormVisibility() {
        setFormVisibility(!formVisibility);
    }

    function handleSubmit(project) {
        setProjectList([...projectList, project]);
    }

    function handleSelectProject(id) {
        setSelectedProjectId(id);
    }

    function handleUnselectProject() {
        setSelectedProjectId(null);
    }

    return (
        <>
            <Header/>

            <button onClick={toggleFormVisibility}>
                {formVisibility ? "Esconder" : "Mostrar"} formulário
            </button>

            <FilterBar filter={filter} setFilter={setFilter} />

            {formVisibility && <ProjectForm handleSubmit={handleSubmit}/>}

            {loading && <div>Carregando projetos...</div>}
            {error && <div>{error}</div>}

            {selectedProjectId ?
                <ProjectDetails onUnselect={handleUnselectProject} projectId={selectedProjectId}/> :
                <ResearchList onSelectProject={handleSelectProject} projects={filteredProjectList}/>}
        </>
    );
}