import './App.css'

export default function App() {
    const products = [{
        nome: "Smartphone Premium",
        preco: 2999.99,
        descricao: "Celular com tela OLED 6.7'', 256GB armazenamento, câmera tripla 108MP",
        estoque: 15,
        avaliacao: 4.8
    }, {
        nome: "Notebook Ultrafino",
        preco: 4599.90,
        descricao: "Processador i7, 16GB RAM, SSD 512GB, tela 14' Full HD",
        estoque: 8,
        avaliacao: 4.6
    }, {
        nome: "Fones de Ouvido Sem Fio",
        preco: 599.50,
        descricao: "Cancelamento de ruído, bateria de 30h, conexão Bluetooth 5.2",
        estoque: 32,
        avaliacao: 4.9
    }, {
        nome: "Smartwatch Pro",
        preco: 1299.00,
        descricao: "Monitor de batimento cardíaco, GPS integrado, resistente à água",
        estoque: 12,
        avaliacao: 4.3
    }, {
        nome: "Console de Jogos Nova Geração",
        preco: 4499.99,
        descricao: "1TB SSD, 4K 120FPS, controle sem fio incluso",
        estoque: 5,
        avaliacao: 4.7
    }, {
        nome: "Câmera Profissional",
        preco: 8999.00,
        descricao: "Sensor full-frame, 4K 60fps, kit com lente 24-70mm",
        estoque: 3,
        avaliacao: 5.0
    },{
        nome: "Tablet Avançado",
        preco: 1999.99,
        descricao: "Tela 12.9'', 128GB armazenamento, compatível com caneta stylus",
        estoque: 10,
        avaliacao: 4.5
    }, {
        nome: "Impressora Multifuncional",
        preco: 799.90,
        descricao: "Impressão, cópia e digitalização, Wi-Fi integrado, compatível com duplex",
        estoque: 20,
        avaliacao: 4.2
    }, {
        nome: "Roteador Wi-Fi 6",
        preco: 349.00,
        descricao: "Velocidade de até 3Gbps, cobertura de até 200m², 4 portas LAN",
        estoque: 25,
        avaliacao: 4.4
    }, {
        nome: "Teclado Mecânico Gamer",
        preco: 299.90,
        descricao: "Switches mecânicos RGB, teclas programáveis, design ergonômico",
        estoque: 50,
        avaliacao: 4.8
    }];

    return (<>
        <ul className="container">
            {products.map((product) => {
                return (
                    <li className="card">
                        <h2>{product.nome}</h2>
                        <p>R$ {product.preco.toFixed(2)}</p>
                        <p>{product.descricao}</p>
                        <p>Disponível: {product.estoque} unidades</p>
                        <p>Avaliação: {product.avaliacao} ★</p>
                    </li>
                );
            })}
        </ul>
    </>)
}