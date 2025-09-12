import GradeList from "./GradeList";

export default function SubjectList({subjectList}) {
    return (
        <>
            <h4>Lista de disciplinas</h4>
            {
                subjectList.map((subject) => {
                    return (
                        <div>
                            <h4>Disciplina {subject.nome}</h4>
                            <h4>Prof(a). {subject.docente}</h4>
                            <GradeList GradeList={subject.notas}></GradeList>
                        </div>
                    )
                })
            }
        </>
    )
}