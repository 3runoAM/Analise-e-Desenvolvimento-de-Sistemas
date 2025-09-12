import './App.css';
import ColorDisplay from "./components/ColorDisplay.jsx";
import {useState} from "react";

export default function App() {

    const [color, setColor] = useState('#f0f0f0');

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: "space-between",
            height: '20%'
        }}>
            <ColorDisplay color={color}></ColorDisplay>
            <input type="color" value={color} onChange={(e) => setColor(e.target.value)}/>
        </div>
    );
}