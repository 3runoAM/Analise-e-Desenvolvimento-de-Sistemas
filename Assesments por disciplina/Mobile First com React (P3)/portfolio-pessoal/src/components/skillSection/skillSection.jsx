import styles from './skillSection.module.css';
import SkillCard from '../skillCard/skillCard';

export default function SkillSection({ skillsData }) {
    return (
        <section className={`${styles.skillSection} flex-column align-center `}>
            <h2>{skillsData.title}</h2>

            <div className={`${styles.skillContainer} flex-row flex-wrap mediumGap mediumPadding flex-center hoverEffect`}>
                {skillsData.skills.map((skill) => (
                    <SkillCard skillData={skill}/>
                ))}
            </div>
        </section>
    );
}