import {useState} from "react";

export default function SortControls({onSort}) {
    const [sortCriteria, setSortCriteria] = useState({
        sortBy: "title",
        order: "asc"
    });

    const handleModelUpdate = (field, value) => {
        setSortCriteria({
            ...sortCriteria,
            [field]: value
        })
    }

    const handleSort = () => {
        if (sortCriteria.sortBy && sortCriteria.order) {
            onSort(sortCriteria);
        }
    }

    return (
        <>
            <form className="flex-column centered mediumGap">
                <div className="flex-column smallGap">
                    <div className="flex-column smallGap">
                        <label htmlFor="sortCriteria">Ordenar por:</label>
                        <select value={sortCriteria.sortBy}
                                onChange={(e) => handleModelUpdate("sortBy", e.target.value)}>
                            <option value="title">Título</option>
                            <option value="researcher">Pesquisador Responsável</option>
                            <option value="startDate">Data de Início</option>
                            <option value="status">Status</option>
                            <option value="teamSize">Número de Membros da Equipe</option>
                        </select>
                    </div>

                    <div className="flex-column smallGap">
                        <label htmlFor="order">Ordem:</label>
                        <select value={sortCriteria.order} onChange={(e) => handleModelUpdate("order", e.target.value)}>
                            <option value="asc">Crescente</option>
                            <option value="desc">Decrescente</option>
                        </select>
                    </div>
                </div>

                <button type="button" onClick={() => handleSort(sortCriteria)}>Ordenar</button>
            </form>
        </>
    )

}