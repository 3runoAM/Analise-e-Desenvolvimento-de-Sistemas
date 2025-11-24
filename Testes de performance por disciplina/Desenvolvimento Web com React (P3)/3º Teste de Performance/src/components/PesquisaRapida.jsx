import {useRef, useState} from "react";

export default function PesquisaRapida() {
    const [showRef, setShowRef] = useState(false);
    const textoRef = useRef("");

    return (
        <section>
            {showRef && <p>Query: {textoRef.current?.value}</p>}

            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label htmlFor="texto">Pesquisar</label>
                    <input ref={textoRef} type="text" id="texto" />
                </div>

                <button onClick={() => setShowRef(!showRef)}>Pesquisar</button>
            </form>
        </section>
    );
}