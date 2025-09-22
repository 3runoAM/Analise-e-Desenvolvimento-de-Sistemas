import { useEffect, useState } from "react";
import Header from "../components/header/Header";
import ResearchList from "../components/researchList/ResearchList";
import ProjectForm from "../components/projectForm/ProjectForm";
import ProjectDetails from "../components/projectDetails/ProjectDetails";
import FilterBar from "../components/filterBar/filterBar";
import SortControls from "../components/sortControls/SortControls";

export default function Dashboard() {
    // Listas
    const [projectList, setProjectList] = useState([]);
    const [favoriteProjects, setFavoriteProjects] = useState([]);
    const [exhibitionList, setExhibitionList] = useState([]);
    const [teamMembers, setTeamMembers] = useState([]);


    // Switches de visibilidade
    const [formVisibility, setFormVisibility] = useState(false);
    const [sortControlsVisibility, setSortControlsVisibility] = useState(false);

    // Estados de filtragem e exibição
    const [selectedProjectId, setSelectedProjectId] = useState(null);
    const [filter, setFilter] = useState("Todos");
    const [sortCriteria, setSortCriteria] = useState({
        sortBy: "id",
        order: "asc",
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [teamsSizes, setTeamsSizes] = useState([]);

    // Load e erro
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [loadingTeam, setLoadingTeam] = useState(false);


    //  RECUPERA OS PROJETOS
    useEffect(() => {
        fetchProjects();
    }, []);

    // FAZ A CONTAGEM DE PESSOAS DO TIME EM CADA PROJETO SEMPRE QUE UM NOVO PROJETO É ADICIONADO AO ESTADO
    useEffect(() => {
        buildTeamSizes();
    }, [projectList]);

    // RECUPERA OS DADOS DO TIME DO PROJETO SELECIONADO
    useEffect(() => {
        if (selectedProjectId) {
            fetchTeamMembers(selectedProjectId);
        }
    }, [selectedProjectId]);

    // FILTRAGEM E SORT DO SortControls
    useEffect(() => {
        function compareValues(valueA, valueB, order) {
            if (valueA < valueB) return order === "asc" ? -1 : 1;
            if (valueA > valueB) return order === "asc" ? 1 : -1;
            return 0;
        }

        const filtered = projectList
            .filter((project) => {
                if (filter === "Todos") return true;
                if (filter === "Ativos") return project.status;
                if (filter === "Inativos") return !project.status;
                if (filter === "Favoritos")
                    return favoriteProjects.includes(project.id);
                return true;
            })
            .sort((currentProject, nextProject) => {
                switch (sortCriteria.sortBy) {
                    case "title":
                        return compareValues(
                            currentProject.title,
                            nextProject.title,
                            sortCriteria.order
                        );
                    case "researcher":
                        return compareValues(
                            currentProject.researcher,
                            nextProject.researcher,
                            sortCriteria.order
                        );
                    case "startDate":
                        return compareValues(
                            new Date(currentProject.startDate),
                            new Date(nextProject.startDate),
                            sortCriteria.order
                        );
                    case "status":
                        return compareValues(
                            currentProject.status,
                            nextProject.status,
                            sortCriteria.order
                        );
                    case "teamSize":
                        return compareValues(
                            teamsSizes[currentProject.id] || 0,
                            teamsSizes[nextProject.id] || 0,
                            sortCriteria.order
                        );
                    default:
                        return compareValues(
                            Number(currentProject.id),
                            Number(nextProject.id),
                            "asc"
                        );
                }
            });

        setExhibitionList(filtered);
    }, [projectList, filter, favoriteProjects, sortCriteria, teamsSizes]);

    // ASYNC QUE RECUPERA OS PROJETOS
    async function fetchProjects() {
        setLoading(true);
        setError(null);

        await fetch("/projects.json")
            .then((response) => response.json())
            .then((data) => setProjectList(data))
            .catch((err) => console.log(err));

        setLoading(false);
    }

    // ASYNC QUE FAZ A CONTAGEM DOS INTEGRANTES POR TIME
    async function buildTeamSizes() {
        const sizes = {};
        await Promise.all(
            projectList.map(async (project) => {
                sizes[project.id] = await fetch(
                    `/projectTeam/projectTeam${project.id}.json`
                )
                    .then((response) => response.json())
                    .then((data) => data.length)
                    .catch(() => 0);
            })
        );
        setTeamsSizes(sizes);
    }


    // ASYNC QUE CARREGA OS DADOS DO TIME POR ID
    async function fetchTeamMembers(id) {
        setLoadingTeam(true);
        setError(null);
        await fetch(`/projectTeam/projectTeam${id}.json`)
            .then((response) => response.json())
            .then((data) => setTeamMembers(data))
            .catch((err) => setError(err.message))
            .finally(() => setLoadingTeam(false));
    }

    // SWITCHES DE VISIBILIDADE
    function toggleFormVisibility() {
        setFormVisibility(!formVisibility);
    }

    function toggleSortControlsVisibility() {
        setSortControlsVisibility(!sortControlsVisibility);
        setSortCriteria({ sortBy: "id", order: "asc" });
    }

    // HANDLERS
    function handleSubmit(project) {
        if (isValidProject(project)) setProjectList([...projectList, project]);
    }

    function isValidProject(project) {
        return (
            project.id.trim() !== "" &&
            project.title.trim() !== "" &&
            project.researcher.trim() !== "" &&
            project.description.trim() !== ""
        );
    }

    function handleSelectProject(id) {
        setSelectedProjectId(id);
    }

    function handleUnselectProject() {
        setSelectedProjectId(null);
    }

    function addNewMember(member) {
        setTeamMembers([...teamMembers, member]);
    }

    // FAVORITAR / DESFAVORITAR
    function addToFavorites(projectId) {
        if (!favoriteProjects.includes(projectId)) {
            setFavoriteProjects([...favoriteProjects, projectId]);
        }
    }

    function removeFavorite(projectId) {
        setFavoriteProjects(favoriteProjects.filter((id) => id !== projectId));
    }

    function handleLoadMore() {
        setCurrentPage(currentPage + 1);
    }

    function onSort(newSortCriteria) {
        if (!newSortCriteria.sortBy || !newSortCriteria.order) return;
        setSortCriteria(newSortCriteria);
    }

    return (
        <>
            <Header />

            <FilterBar setFilter={setFilter} />

            <div className="flex-row largeGap">
                <div className="flex-column mediumGap">
                    <button onClick={toggleFormVisibility}>
                        {formVisibility ? "Esconder" : "Mostrar"} formulário
                    </button>

                    {formVisibility && <ProjectForm handleSubmit={handleSubmit} />}
                </div>

                <div className="flex-column mediumGap">
                    <button onClick={toggleSortControlsVisibility}>
                        {sortControlsVisibility ? "Esconder" : "Mostrar"} ordenação
                    </button>

                    {sortControlsVisibility && (
                        <SortControls onSort={onSort}></SortControls>
                    )}
                </div>
            </div>

            {loading && <div>Carregando projetos...</div>}
            {error && <div>{error}</div>}

            {selectedProjectId ? (
                <ProjectDetails
                    projectId={selectedProjectId}
                    onUnselect={handleUnselectProject}
                    isFavorite={favoriteProjects.includes(selectedProjectId)}
                    teamMembers={teamMembers}
                    loadingTeam={loadingTeam}
                    addNewMember={addNewMember}
                />
            ) : (
                <>
                    <ResearchList
                        projects={exhibitionList.slice(0, currentPage * 5)}
                        favoriteProjects={favoriteProjects}
                        onSelectProject={handleSelectProject}
                        addToFavorites={addToFavorites}
                        removeFavorite={removeFavorite}
                    />

                    {exhibitionList.length > currentPage * 5 && (
                        <button onClick={handleLoadMore}>Carregar mais</button>
                    )}
                </>
            )}
        </>
    );
}
