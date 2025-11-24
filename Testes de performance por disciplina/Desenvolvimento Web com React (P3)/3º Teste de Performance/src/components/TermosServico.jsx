import {useState} from "react";

export default function TermosServico() {
    const [estaMarcado, setEstaMarcado] = useState(false);

    return (
        <section>
            <div>
                <label htmlFor="termos">Aceitar os termos de serviço</label>
                <input id="termos"
                       type="checkbox"
                       checked={estaMarcado}
                       onChange={e => setEstaMarcado(!estaMarcado)}/>
            </div>

            <p>{
                estaMarcado ? "Você aceitou os termos" : "Você não aceitou os termos"
            }</p>
        </section>
    );
}