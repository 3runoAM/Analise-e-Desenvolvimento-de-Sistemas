import ProductInfo from "./ProductInfo";
import SellerInfo from "./SellerInfo";
import RatingList from "./RatingList";

export default function Product({ProductData}) {
    const {nome, descricao, preco, vendedor, avaliacoes} = ProductData;
    const PRODUCT_INFO = {nome, descricao, preco};
    const SELLER_INFO = {vendedor};
    const RATING_LIST = {avaliacoes};

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '40%',
            padding: '1%',
            boxShadow: '0 4px 8px 0 #3d3d3d',
        }}>
            <ProductInfo ProductInfo={PRODUCT_INFO}></ProductInfo>
            <SellerInfo SellerInfo={SELLER_INFO}></SellerInfo>
            <RatingList RatingList={RATING_LIST}></RatingList>
        </div>
    );
}