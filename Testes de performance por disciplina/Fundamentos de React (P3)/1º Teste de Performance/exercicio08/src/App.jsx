import './App.css'

export default function App() {
    const time = new Date().getHours();
    let greetings;
    if (time < 12) {
        greetings = 'Bom dia';
    } else if (time < 18) {
        greetings = 'Boa tarde';
    } else {
        greetings = 'Boa noite';
    }

    console.log(time);

    return (
        <>
            <div>
                <h2>{`${greetings} e boas vindas!`}</h2>
            </div>
        </>
    )
}