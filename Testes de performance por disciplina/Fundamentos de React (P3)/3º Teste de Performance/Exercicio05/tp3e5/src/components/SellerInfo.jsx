export default function SellerInfo({SellerInfo}) {

    return (
        <>
            <section>
                <h3>Vendedor</h3>
                <p>Nome: {SellerInfo.vendedor.nome}</p>
                <p>Telefone: {SellerInfo.vendedor.telefone}</p>
                <p>Avaliação: {SellerInfo.vendedor.nota}/5.0</p>
            </section>
        </>
    )
}