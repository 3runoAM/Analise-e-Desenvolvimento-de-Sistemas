export default function BookFilters({filters, onFilter}) {
    const flexRow = {
        display: "flex", justifyContent: "center", alignItems: "center", gap: "2%"
    }

    const handleFilter = (filter, value) => {
        onFilter({
            ...filters, [filter]: value
        })
    }

    return (<div style={flexRow}>
            <div style={flexRow}>
                <label htmlFor="genre">Gênero</label>
                <input value={filters.genre}
                       id="genre"
                       type="text"
                       onChange={e => handleFilter("genre", e.target.value)}/>
            </div>

            <div style={flexRow}>
                <label htmlFor="minRate">Avaliação mínima</label>
                <input value={filters.minRate}
                       id="minRate"
                       type="number"
                       onChange={e => handleFilter("minRate", e.target.value)}/>
            </div>

            <div style={flexRow}>
                <label htmlFor="minPages">Número mínimo de páginas</label>
                <input value={filters.minPages}
                       id="minPages"
                       type="number"
                       onChange={e => handleFilter("minPages", e.target.value)}/>
            </div>
        </div>)
}