import styles from './ResearchCard.module.css';

export default function ResearchCard({projectData, addToFavorites, removeFavorite, isFavorite}) {

    /* Aqui a mágica acontece */

    return (
        <div className={`${styles.researchCard} flex-column smallGap`}>
            <div className="flex-row spaceBetween">
                <p className={`${styles.title} ${styles.hiddenTextOverflow}`}>
                    {projectData.title} - id: {projectData.id}
                </p>

                <div className={`${styles.starContainer}`}>
                    <input type="checkbox"
                           className={`${styles.starCheckbox}`}
                           checked={isFavorite}
                           onClick={(e) => e.stopPropagation()}
                           onChange={(e) => e.target.checked ? addToFavorites(projectData.id) : removeFavorite(projectData.id)}/>
                </div>
            </div>

            <p>{`Projeto liderado por ${projectData.researcher} | ${projectData.status ? "Ativo" : "Inativo"} `}</p>
            <p className={`${styles.hiddenTextOverflow}`}>{projectData.description}</p>
            <p>{`Início ${new Date(projectData.startDate).toLocaleDateString()}`}</p>
        </div>
    )
}