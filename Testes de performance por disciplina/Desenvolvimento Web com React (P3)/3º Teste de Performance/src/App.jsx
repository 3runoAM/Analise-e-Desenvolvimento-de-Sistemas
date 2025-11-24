import './App.css';
import NomeUsuario from "./components/NomeUsuario";
import TermosServico from "./components/TermosServico";
import Comentario from "./components/Comentario";
import SelecionarCidade from "./components/SelecionarCidade";
import Login from "./components/Login";
import PesquisaRapida from "./components/PesquisaRapida";


export default function App() {
    return (
        <section>
            <ol>
                <li>
                    <h2>Input Controlado Básico</h2>
                    <NomeUsuario/>
                </li>

                <li>
                    <h2>Checkbox Controlado</h2>
                    <TermosServico/>
                </li>

                <li>
                    <h3>Textarea Controlado</h3>
                    <Comentario/>
                </li>

                <li>
                    <h3>Select Controlado</h3>
                    <SelecionarCidade/>
                </li>

                <li>
                    <h3>Formulário de Login</h3>
                    <Login/>
                </li>

                <li>
                    <h3>Input Não Controlado com Ref</h3>
                    <PesquisaRapida/>
                </li>
            </ol>
        </section>
    );
}