import Header from "../components/header/header";
import ProfileCard from "../components/profileCard/profileCard";
import ProjectSection from "../components/projectSection/projectSection";
import SkillSection from "../components/skillSection/skillSection";
import Testimonial from "../components/testimonial/testimonial";

export default function Portfolio() {
    const profileCardData = {
        imgUrl: "/userPicture.png",
        name: "Bruno Martins",
        bio: "Um desenvolvedor Java que ama desenvolver para a web."
    };
    const mySkillsData = {
        name: "MINHA AUTO AVALIAÇÃO",
        skills: [{name: "Java", grade: 9},
            {name: "React", grade: 7},
            {name: "Spring", grade: 9},
            {name: "PostgreSQL", grade: 8}]
    }
    const professorSkillsData = {
        name: "AVALIAÇÃO DO PROFESSOR",
        skills: [{name: "Didática", grade: 10},
        {name: "Domínio", grade: 9}]
    }

    return (
        <>
            <Header/>
            <ProfileCard profileData={profileCardData}/>
            <SkillSection skillsData={mySkillsData}/>
            <SkillSection skillsData={professorSkillsData}/>
            <Testimonial/>
            <ProjectSection/>
        </>
    );
}