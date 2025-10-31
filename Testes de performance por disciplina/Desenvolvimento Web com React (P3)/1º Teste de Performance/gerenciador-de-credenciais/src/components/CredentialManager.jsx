import {useState} from "react";
import ItemCredential from "./ItemCredential";

export default function CredentialManager() {
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });
    const [credentialList, setCredentialList] = useState([]);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setCredentials(prev => ({...prev, [name]: value}));
    };

    const handleSaveCredentials = () => {
        setCredentials({email: "", password: ""});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (credentialList.filter(c => c.id === credentials.email).length === 0) {
            credentials.id = credentials.email;
            setCredentialList([...credentialList, credentials]);
        }

        handleSaveCredentials();
    }

    const deleteCredential = (id) => {
        setCredentialList(prevList => prevList.filter(c => c.id !== id));
    }

    return (
        <>
            <div>
                <h3>Credenciais Digitadas:</h3>
                <p>Email: {credentials.email}</p>
                <p>Senha: {credentials.password}</p>
            </div>

            <div className="div"></div>
            <form className="flex-column" onSubmit={(e) => handleSubmit(e)}>
                <div className="flex-column">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={credentials.email}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>

                <ItemCredential handleInputChange={handleInputChange}
                                credentialList={credentialList}
                                deleteCredential={deleteCredential}
                                password={credentials.password} />

                <button type="submit">Salvar credencial</button>


            </form>

        </>
    );
}