import {useState} from "react";

export default function NomeUsuario() {
    const [nome, setNome] = useState("");

    return (
        <section>
            <div>
                <label htmlFor="nome">Nome: </label>
                <input id="nome" value={nome} onChange={e => setNome(e.target.value)}/>
            </div>

            <h3>O seu nome é: {nome}</h3>
        </section>
    );
}