import Header from "../components/header/header";
import ProfileCard from "../components/profileCard/profileCard";
import ProjectSection from "../components/projectSection/projectSection";
import SkillSection from "../components/skillSection/skillSection";
import Testimonial from "../components/testimonial/testimonial";
import React, {useEffect, useState} from "react";

export default function Portfolio() {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const headerData = {
        title: "ASSESSMENTS DA DISCIPLINA DE MOBILE FIRST",
    }
    const profileCardData = {
        imgUrl: "/userPicture.png", name: "Bruno Martins", bio: "Um desenvolvedor Java que ama desenvolver para a web."
    };
    const mySkillsData = {
        title: "MINHA AUTO AVALIAÇÃO",
        skills: [{title: "Java", grade: 9}, {title: "React", grade: 7}, {
            title: "Spring",
            grade: 9
        }, {title: "PostgreSQL", grade: 8}]
    }
    const professorSkillsData = {
        title: "AVALIAÇÃO DO PROFESSOR", skills: [{title: "Didática", grade: 10}, {title: "Domínio", grade: 9}]
    }
    const testimonialData = {
        title: "MEU DEPOIMENTO",
        testimonial: "Comecei a estudar programação em 2022, de lá para cá passei por algumas linguagens de programação" +
            " e frameworks, mas Java e Spring tem um lugar especial no meu coração. Hoje sou um desenvolvedor júnior no" +
            " centro universitário da minha cidade e me considero um desenvolvedor back-end, que tenta desenvolver " +
            "interfaces interessantes."
    }

    useEffect(() => {
        fetch("https://api.github.com/users/3runoAM/repos")
            .then((response) => response.json())
            .then((data) => {
                setRepos(data.filter(repo => !repo.private)
                    .filter(repo => repo.language));
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
            });
    }, []);


    if (loading) return <div>Carregando Projetos...</div>;

    return (<>
            <Header headerData={headerData}/>
            <ProfileCard profileData={profileCardData}/>
            <SkillSection skillsData={mySkillsData}/>
            <SkillSection skillsData={professorSkillsData}/>
            <Testimonial testimonialData={testimonialData}/>
            <ProjectSection reposData={repos}/>
        </>);
}