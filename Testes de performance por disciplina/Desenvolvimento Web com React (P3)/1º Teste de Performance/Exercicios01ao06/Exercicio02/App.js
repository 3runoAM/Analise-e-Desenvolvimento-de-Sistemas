function App() {
    return (
        <div>
            <h1>Exercício 02</h1>

            <Bio/>
        </div>
    );
}


function Bio() {
    const [bio, setBio] = React.useState('');
    const [counter, setCounter] = React.useState(0);

    return (
        <form onSubmit={e => e.preventDefault()}>
            <label htmlFor="bio"></label>

            <textarea id="bio" value={bio} onChange={(e) => {
                setBio(e.target.value)
                setCounter(e.target.value.trim().length)
            }}/>

            <p>Nº de caracteres na biografia: {counter}</p>
        </form>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <App/>
);