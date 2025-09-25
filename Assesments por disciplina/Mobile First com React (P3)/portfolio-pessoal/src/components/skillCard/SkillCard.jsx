import styles from './SkillCard.module.css';

export default function SkillCard({skillData}) {
    return (
        <div className={`${styles.skillCard} flex-column flex-center smallGap`}>
            <p>{skillData.name}</p>

            <div className={`${styles.skillContainer} flex-row flex-wrap flex-center`}>
               <p>{skillData.grade}</p>
               <p>de 10</p>
            </div>
        </div>
    )
}