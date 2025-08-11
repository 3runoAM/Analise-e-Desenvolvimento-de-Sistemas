import './App.css'
import {useState} from 'react';

export default function App() {
    const [firstNum, setFirstNum] = useState();
    const [secondNum, setSecondNum] = useState();

    function sumTwoNumbers(num1, num2) {
        return num1 + num2;
    }

    return (<>
        <h1>Exercício 10</h1>
        <div id="container">
            <input type="number"
                   placeholder="Digite o primeiro número"
                   value={firstNum}
                   defaultValue={0}
                   onChange={(e) => setFirstNum(Number(e.target.value))}
            />
            <input type="number"
                   placeholder="Digite o segundo número"
                   value={secondNum}
                   defaultValue={0}
                   onChange={(e) => setSecondNum(Number(e.target.value))}
            />
        </div>

        {(firstNum && secondNum) && (<p>Soma dos números: {firstNum + secondNum}</p>)}
    </>)
}