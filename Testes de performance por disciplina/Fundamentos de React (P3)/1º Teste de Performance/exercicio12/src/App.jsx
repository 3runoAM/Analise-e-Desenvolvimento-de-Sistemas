import './App.css'

export default function App() {
    const firstNumber = 50;
    const secondNumber = 100;

    const sumNumbers = (a, b) => a + b;

    return (
        <>
            <p>
                A soma dos números {firstNumber} e {secondNumber} é: {sumNumbers(firstNumber, secondNumber)}
            </p>
        </>
    )
}