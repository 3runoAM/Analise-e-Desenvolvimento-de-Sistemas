import styles from "./projectSection.module.css";

import {useState} from "react";
import ProjectCard from "../projectCard/projectCard";

export default function ProjectSection({reposData}) {
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <section className={`${styles.projectSection} flex-column flex-center`}>
            <h2>MEUS PROJETOS</h2>

            <div className={`flex-column flex-center mediumGap`}>
                {reposData.slice(0, currentPage * 2).map((repo) => {
                    return <ProjectCard repoData={repo}/>
                })}
            </div>


            {currentPage * 2 < reposData.length && (
                <button className={styles.button} onClick={() => setCurrentPage(currentPage + 1)}>
                    Carregar mais
                </button>)
            }
        </section>
    );
}