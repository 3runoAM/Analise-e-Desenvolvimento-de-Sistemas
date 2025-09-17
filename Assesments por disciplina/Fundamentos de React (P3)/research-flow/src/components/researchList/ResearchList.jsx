import ResearchCard from "../researchCard/ResearchCard";
import styles from './ResearchList.module.css';

export default function ResearchList({projects}) {

    /* Aqui a mágica acontece */

    return (
        <section className="flex-column centered mediumGap">
            <h2>Projetos Acadêmicos</h2>
            <ul className={`${styles.listContainer} flex-row flexWrap centered listStyleNone largeGap`}>
                {projects.map((project) => (
                    <li>
                        <ResearchCard projectData={project}></ResearchCard>
                    </li>
                ))}
            </ul>
        </section>
    )
}