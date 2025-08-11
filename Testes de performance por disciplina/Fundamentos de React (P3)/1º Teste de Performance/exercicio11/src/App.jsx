import './App.css'
import {useState} from 'react';

export default function App() {
    const [fahrenheit, setFahrenheit] = useState(0);

    function celciusToFahrenheit(celciusDegrees) {
        let f = celciusDegrees * 1.8 + 32;
        setFahrenheit(f);
    }

    return (
        <>
            <input type="number"
                   onChange={(e) => celciusToFahrenheit(Number(e.target.value))}
                   placeholder="Temperatura em celcius"/>

            <p>Temperatura em Fahrenheit: {fahrenheit}</p>
        </>
    )
}