import './App.css'

export default function App() {
    const user = {
        name: "Bruno Martins",
        age: 25,
        isLoggedIn: true
    };
    return (
        <>
            <div>
                <div id="container">
                    <img src="src/assets/user_profile.png" alt="User Profile"/>
                    <h2>{user.name}</h2>
                </div>

                <p>Idade: {user.age}</p>
                <p>Status: {user.isLoggedIn ? "Logado" : "Precisa logar"}</p>
            </div>
        </>
    )
}