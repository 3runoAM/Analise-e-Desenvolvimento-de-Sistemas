import style from './Card.module.css';

export default function Card({name, imageUrl}) {
    return (
        <div className={style.card}>
            <h2>{name}</h2>
            <img src={imageUrl} alt={name} className={style.cardImage}/>
        </div>
    );
}