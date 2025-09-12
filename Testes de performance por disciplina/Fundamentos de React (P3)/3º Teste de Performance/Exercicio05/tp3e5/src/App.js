import './App.css';
import Product from './components/Product';

export default function App() {
    const productData = {
        nome: "Agumon - Figura Colecionável",
        descricao: "Figura detalhada do Agumon com 15cm de altura, material PVC de alta qualidade, pintura manual e base inclusa. Edição limitada.",
        preco: 89.90,
        vendedor: {
            nome: "DigiStore Brasil",
            telefone: "(11) 99999-8888",
            nota: 4.8
        },
        avaliacoes: [
            {
                usuario: "TaiKamiya_01",
                avaliacao: "Produto incrível! Os detalhes são perfeitos e a entrega foi super rápida.",
                nota: 5.0
            },
            {
                usuario: "DigiFã23",
                avaliacao: "Boa qualidade, mas a pintura poderia ser um pouco melhor em alguns detalhes.",
                nota: 4.0
            },
            {
                usuario: "GabumonLover",
                avaliacao: "Excelente figura, veio bem embalada e sem defeitos. Recomendo!",
                nota: 5.0
            }
        ]
    }

    return (
        <>
            <Product ProductData={productData}></Product>
        </>
    );
}