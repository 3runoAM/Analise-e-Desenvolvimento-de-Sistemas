import './App.css'
import {useState} from "react";

export default function App() {
    const [nome, setNome] = useState('');

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

    return (<>
        <div>
            <input type="text" placeholder="Digite seu nome" value={nome}
                   onChange={e => setNome(e.target.value)}/>

            {nome && (<h2>{`${greetings} e boas vindas, ${nome}!`}</h2>)}
        </div>
    </>)
}