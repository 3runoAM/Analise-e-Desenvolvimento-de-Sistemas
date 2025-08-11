import './App.css'

export default function App() {
    const num = 5;
    const isEven = (num) => num % 2 === 0;

  return (
    <>
        <h3>Ímpar ou par</h3>
        <p>O número {num} é {isEven(num) ? 'par' : 'ímpar'}.</p>
    </>
  )
}