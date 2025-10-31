import {useState} from "react";

export default function ItemCredential({password, handleInputChange, credentialList, deleteCredential}) {
    const [visible, setVisible] = useState(false);

    return (
        <div className="flex-column">
            <label htmlFor="password">Senha</label>
            <div className="flex-row">
                <input id="password"
                       name="password"
                       type={visible ? "text" : "password"}
                       value={password}
                       onChange={(e) => handleInputChange(e)}/>
                <button type="button" onClick={() => setVisible(!visible)}>{ visible ? "Ocultar" : "Exibir" }</button>
            </div>

            <div>
                <ul>
                    {
                        credentialList.map(c => (
                            <li className="flex-column">
                                <div className="flex-column">
                                    <p>Email: {c.email}</p>
                                    <p>Senha: {c.password}</p>
                                </div>
                                <button onClick={() => deleteCredential(c.id) }>Excluir</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}