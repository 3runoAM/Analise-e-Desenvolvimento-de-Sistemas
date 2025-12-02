import styles from './header.module.css';

export default function Header({headerData}) {
    return (
        <>
            <h1 className={styles.title}>{headerData.title}</h1>
        </>
    );
}