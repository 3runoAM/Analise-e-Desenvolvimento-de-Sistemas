export default function RatingList({RatingList}) {
    return (
        <>
            <section>
                <h3>Avaliações</h3>
                <ul>
                    {RatingList.avaliacoes.map((rating) => (
                        <li>
                            <p>{rating.usuario} avaliou como ({rating.nota}/5.0)</p>
                            <p>"{rating.avaliacao}"</p>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}