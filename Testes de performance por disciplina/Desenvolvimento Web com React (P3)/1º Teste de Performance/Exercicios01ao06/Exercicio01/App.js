function App() {
    function mostrarMensagem() {
        console.log("Mensagem React");
    }

    return (
        <div>
            <button onClick={mostrarMensagem}>Botão React</button>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);