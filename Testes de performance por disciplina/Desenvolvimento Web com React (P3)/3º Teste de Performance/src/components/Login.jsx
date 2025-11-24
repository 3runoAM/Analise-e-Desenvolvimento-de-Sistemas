import {useState} from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <section>
            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email"
                           id="email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="password">Senha</label>
                    <input type="password"
                           id="password"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit">Entrar</button>
            </form>

            <div>
                <h3>Dados do formulário</h3>
                <p>Email: {email}</p>
                <p>Senha: {password}</p>
            </div>
        </section>
    );
}