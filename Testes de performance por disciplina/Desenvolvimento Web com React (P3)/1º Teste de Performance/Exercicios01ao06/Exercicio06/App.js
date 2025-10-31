import  {useState} from 'react';
import { useEffect } from 'react';

function App() {
    return (
        <div>
            <MousePositionTracker/>
        </div>
    );
}

function MousePositionTracker() {
    const [position, setPosition] = useState({
        clientX: 0,
        clientY: 0
    });

   useEffect(() => {
        function handleMouseMove(event) {
            setPosition({
                clientX: event.clientX,
                clientY: event.clientY
            });
        }

        window.addEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div>
            <h1>Mapeador de posição do mouse</h1>
            <dl>
                <dt>Posição atual do mouse</dt>
                <dl>
                    <p>EIXO X: {position.clientX} </p>
                    <p>EIXO Y: {position.clientY}</p>
                </dl>
            </dl>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <App/>
);