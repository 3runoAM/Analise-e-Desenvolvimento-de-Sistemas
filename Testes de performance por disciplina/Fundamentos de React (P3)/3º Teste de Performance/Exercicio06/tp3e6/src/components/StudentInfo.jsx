export default function StudentInfo({info}) {
    return (
        <>
            <h1>{info.nome}</h1>
            <h2>Matrícula: {info.matricula}</h2>
            <h2>Responsável: {info.responsavel}</h2>
        </>
    )
}