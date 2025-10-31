function App() {
    const [typedText, setTypedText] = React.useState('');
    const [savedText, setSavedText] = React.useState('');

    function handleKeyDown(e) {
        e.key === 'Enter' && setSavedText(e.target.value);
    }

    return (
        <div>
            <input onKeyDown={(e) => handleKeyDown(e)}
                   onChange={(e) => setTypedText(e.target.value)}
                   type="text"/>

            <p>No momento, o texto confirmado é: {savedText}</p>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <App/>
);