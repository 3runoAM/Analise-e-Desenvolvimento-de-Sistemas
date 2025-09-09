import './App.css';
import Navbar from "./components/Navbar/Navbar.jsx";
import Card from "./components/Card/Card.jsx";
import Button from "./components/Button/Button.jsx";
import Footer from "./components/Footer/Footer.jsx";


export default function App() {
    const cardData = [{
        name: "Bulbasauro",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
    }, {
        name: "Charmander",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg"
    }, {
        name: "Squirtle",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg"
    }]

  return (
    <>
        <Navbar></Navbar>

        <main className="flexColumn">
            <div className="card-container">
                {cardData.map(data => {
                    return <Card name={data.name} imageUrl={data.imageUrl}></Card>
                })}
            </div>
            <Button></Button>
        </main>

        <Footer></Footer>
    </>
  );
}
