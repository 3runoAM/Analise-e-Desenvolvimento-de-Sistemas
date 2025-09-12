export default function GradeList({GradeList}) {
    return (
        <div>
            {GradeList.map((gradeInfo) => {
                return (
                    <dl>
                        <dt>{gradeInfo.prova}</dt>
                        <dd>Nota: {gradeInfo.nota}</dd>
                    </dl>
                )
            })}
        </div>)
}