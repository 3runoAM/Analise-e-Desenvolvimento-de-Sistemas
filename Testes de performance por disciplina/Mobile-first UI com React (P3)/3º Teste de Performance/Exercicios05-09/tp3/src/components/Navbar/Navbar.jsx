import style from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav>
            <ul className={`${style.flexRow} ${style.noDecoration}`}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Sobre nós</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
        </nav>
    )
}