import './App.css';
import Card from "./components/Card";

export default function App() {
    const STYLE = {
        shadowColor: "#f10b0b",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
    }


    return (
        <>
            <Card style={STYLE}></Card>
        </>
    );
}