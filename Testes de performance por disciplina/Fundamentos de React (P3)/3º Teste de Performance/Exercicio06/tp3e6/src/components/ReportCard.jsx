import StudentInfo from "./StudentInfo";
import SubjectList from "./SubjectList";

export default function ReportCard({studentData}) {
    const {nome, matricula, responsavel, disciplinas} = studentData;
    const STUDENT_INFO = {nome, matricula, responsavel};

    console.log(STUDENT_INFO);
    console.log(disciplinas);

    return (
        <>
            <StudentInfo info={STUDENT_INFO}></StudentInfo>
            <div>
                <SubjectList subjectList={disciplinas}></SubjectList>
            </div>
        </>
    )
}