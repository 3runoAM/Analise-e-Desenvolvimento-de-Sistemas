import {useState} from "react";

export default function Comentario() {
    const [comentario, setComentario] = useState("");
    const MAX_CARACTERES = 140;

    return (
        <section>
            <div>
                <label htmlFor="comentario">Comentário: </label>
                <textarea
                    id="comentario"
                    value={comentario}
                    maxLength={MAX_CARACTERES}
                    onChange={(e) => setComentario(e.target.value)}
                />
            </div>

            <h3>Caracteres: {comentario.length}/140 caracteres</h3>
        </section>
    );
}