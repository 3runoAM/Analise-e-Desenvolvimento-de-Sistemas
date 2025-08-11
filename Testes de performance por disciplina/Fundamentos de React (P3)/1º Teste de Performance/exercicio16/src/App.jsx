import './App.css'
import Product from "./product.jsx";

export default function App() {
    const productList = [{
        id: 1,
        name: "Smartphone Premium",
        price: 2499.99,
        description: "Tela 6.7', 256GB, Câmera Tripla 108MP",
        stock: 15,
        rating: 5
    }, {
        id: 2,
        name: "Notebook Ultrafino",
        price: 4299.90,
        description: "Intel i7, 16GB RAM, SSD 1TB, 15.6' Full HD",
        stock: 8,
        rating: 4
    }, {
        id: 3,
        name: "Fone Bluetooth",
        price: 399.50,
        description: "ANC, Bateria 30h, à prova d'água",
        stock: 32,
        rating: 4
    }, {
        id: 4,
        name: "Smartwatch Pro",
        price: 1299.00,
        description: "Monitor cardíaco, GPS, 7 dias bateria",
        stock: 3,
        rating: 3
    }, {
        id: 5,
        name: "Tablet Android",
        price: 899.99,
        description: "Tela 10.5', 128GB, Caneta incluída",
        stock: 21,
        rating: 4
    }];

    return (<>
            <h1>Lista de produtos</h1>
            {productList.map((product) => {
                return (<Product name={product.name}
                                 price={product.price}
                                 description={product.description}
                                 stock={product.stock}
                                 rating={product.rating}/>)
            })}
        </>)
}