import {useEffect, useState} from "react";
import TeamMemberList from "../teamMemberList/teamMemberList";
import Error from "../error/error";
import styles from "./ProjectDetails.module.css";

export default function ProjectDetails({projectId, onUnselect, isFavorite, teamMembers, loadingTeam, addNewMember}) {
    const [details, setDetails] = useState(null);
    const [loadingDetails, setLoadingDetails] = useState(false);
    const [error, setError] = useState(null);

    // CARREGA AS INFORMAÇÕES SEMPRE QUE UM PROJETO É SELECIONADO
    useEffect(() => {
        if (projectId) {
            fetchProjectDetails(projectId);
        }
    }, [projectId]);

    // ASYNC QUE AS INFORMAÇÕES DE UM PROJETO POR ID
    async function fetchProjectDetails(id) {
        setLoadingDetails(true);
        setError(null);
        await fetch(`/projectDetails/projectDetails${id}.json`)
            .then((response) => response.json())
            .then((data) => setDetails(data))
            .catch((err) => setError(err.message))
            .finally(() => setLoadingDetails(false));
    }

    if (error) return <Error onUnselect={onUnselect}/>;
    if (!details) return null;
    if (!teamMembers) return null;

    return (<section>
            <button onClick={onUnselect}>Voltar</button>

            {loadingDetails && <div>Carregando detalhes...</div>}

            <div className="flex-row centered smallGap">
                <h2>Detalhes do Projeto: {details.title}</h2>
                {isFavorite && <span className={`${styles.star}`}></span>}
            </div>

            <div>
                <h3>Tecnologias Utilizadas</h3>
                <ul>
                    {details.technologies.map((tech) => (<li>{tech}</li>))}
                </ul>
                <div>
                    <h3>Time</h3>
                    {loadingTeam && <div>Carregando time...</div>}
                    <TeamMemberList members={teamMembers} addNewMember={addNewMember}/>
                </div>
            </div>
        </section>);
}
