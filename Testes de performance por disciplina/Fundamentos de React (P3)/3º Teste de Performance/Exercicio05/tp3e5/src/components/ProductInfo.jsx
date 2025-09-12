export default function ProductInfo({ProductInfo}) {
    return (
        <>
            <h1>{ProductInfo.nome}</h1>
            <p>{ProductInfo.descricao}</p>
            <h2>$ {ProductInfo.preco.toFixed(2)}</h2>
        </>
    )
}