import ResearchCard from "../researchCard/ResearchCard";
import styles from './ResearchList.module.css';

export default function ResearchList({projects, onSelectProject, addToFavorites, removeFavorite, favoriteProjects }) {

    /* Aqui a mágica acontece */

    return (
        <section className="flex-column centered mediumGap">
            <h2>Projetos Acadêmicos</h2>
            <ul className={`${styles.listContainer} flex-row flexWrap centered listStyleNone largeGap`}>
                {projects.map((project) => (
                    <li className={styles.pointer}
                        onClick={() => onSelectProject(project.id)}>
                        <ResearchCard
                            projectData={project}
                            addToFavorites={addToFavorites}
                            removeFavorite={removeFavorite}
                            isFavorite={favoriteProjects.includes(project.id)}/>
                    </li>
                ))}
            </ul>
        </section>
    )
}