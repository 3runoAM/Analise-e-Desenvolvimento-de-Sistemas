import { useEffect, useState } from "react";
import TeamMemberList from "../teamMemberList/teamMemberList";

export default function ProjectDetails({ projectId, onUnselect }) {
    const [details, setDetails] = useState(null);
    const [loadingDetails, setLoadingDetails] = useState(false);
    const [error, setError] = useState(null);
    const [teamMembers, setTeamMembers] = useState([]);
    const [loadingTeam, setLoadingTeam] = useState(false);

    async function fetchProjectDetails(id) {
        setLoadingDetails(true);
        setError(null);
        await fetch(`/projectDetails${id}.json`)
            .then((response) => response.json())
            .then((data) => setDetails(data))
            .catch((err) => {
                setError(err.message);
                console.log(err);
            })
            .finally(() => setLoadingDetails(false));
    }

    async function fetchTeamMembers(id) {
        await fetch(`/projectTeam${id}.json`)
            .then((response) => response.json())
            .then((data) => setTeamMembers(data))
            .catch((err) => setError(err.message))
            .finally(() => setLoadingTeam(false));
    }

    function addNewMember(member) {
        setTeamMembers([...teamMembers, member]);
    }

    useEffect(() => {
        if (projectId) {
            fetchProjectDetails(projectId);
            fetchTeamMembers(projectId);
        }
    }, [projectId]);

    if (loadingDetails) return <div>Carregando detalhes...</div>;
    if (error) return <div>Erro: {error}</div>;
    if (!details) return null;

    return (
        <section>
            <button onClick={ onUnselect }>Voltar</button>
            <h2>Detalhes do Projeto: {details.title}</h2>
            <div>
                <h3>Tecnologias Utilizadas</h3>
                <ul>
                    {
                        details.technologies.map((tech) => (
                            <li>{tech}</li>
                        ))
                    }
                </ul>
                <div>
                    <h3>Time</h3>
                    <TeamMemberList members={teamMembers} addNewMember={addNewMember} />
                </div>
            </div>
        </section>
    );
}
