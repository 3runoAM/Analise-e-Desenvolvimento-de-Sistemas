export default function FilterBar({ setFilter }) {
    return (
        <div className="flex-row mediumGap">
            <button onClick={() => setFilter("Todos")}>Todos</button>
            <button onClick={() => setFilter("Ativos")}>Ativos</button>
            <button onClick={() => setFilter("Inativos")}>Inativos</button>
            <button onClick={() => setFilter("Favoritos")}>Favoritos</button>
        </div>
    );
}