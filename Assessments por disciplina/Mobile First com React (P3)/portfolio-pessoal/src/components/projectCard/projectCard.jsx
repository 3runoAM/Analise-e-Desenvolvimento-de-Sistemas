import styles from './projectCard.module.css';

export default function ProjectCard({repoData}) {
    return (
        <div className={`${styles.repoContainer} flex-column mediumGap hoverEffect`}>
            <h3>{repoData.name}</h3>


            <div className={`flex-column smallGap`}>
                <div className={`flex-column smallGap`}>
                    <p>{repoData.description}</p>
                    <p>Linguagem principal: {repoData.language}</p>
                </div>

                <button onClick={() => window.open(repoData.html_url, "_blank")}>
                    acessar
                </button>
            </div>
        </div>
    );
}