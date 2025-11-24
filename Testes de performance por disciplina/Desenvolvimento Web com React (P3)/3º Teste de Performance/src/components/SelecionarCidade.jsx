import {useState} from "react";

export default function SelecionarCidade() {
    const [cidade, setCidade] = useState("");

    return (
        <section>
            <div>
                <label htmlFor=""></label>
                <select value={cidade} onChange={(e) => setCidade(e.target.value)}>
                    <option value="">Selecione uma cidade</option>
                    <option value="Patos">Patos</option>
                    <option value="Campina Grande">Campina Grande</option>
                    <option value="João Pessoa">João Pessoa</option>
                </select>
            </div>

            <h3>Cidade selecionada: {cidade}</h3>
        </section>
    );
}