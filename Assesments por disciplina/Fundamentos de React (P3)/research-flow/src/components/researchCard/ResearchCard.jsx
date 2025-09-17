import styles from './ResearchCard.module.css';

export default function ResearchCard({projectData}) {

    /* Aqui a mágica acontece */

    return (
        <div className={`${styles.researchCard} flex-column smallGap`}>
            <p className={`${styles.title}`}>{projectData.title} - {projectData.id}</p>
            <p>{`Projeto liderado por ${projectData.researcher} | ${projectData.status ? "Ativo" : "Inativo"} `}</p>
            <p>{projectData.description}</p>
            <p>{`Início ${projectData.startDate.toLocaleDateString()}`}</p>
        </div>
    );
}