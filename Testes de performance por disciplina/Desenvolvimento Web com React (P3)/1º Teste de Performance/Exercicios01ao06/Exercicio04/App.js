function App() {
    return (
        <div>
            <h1>Exercício 04</h1>

            <InputPassword/>
        </div>
    );
}

function InputPassword() {
    const [visible, setVisible] = React.useState(false);

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input type={visible ? "text" : "password"}/>
            <button onClick={() => setVisible(!visible)}>Change</button>
        </form>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <App/>
);