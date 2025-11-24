import {useCallback, useEffect, useState} from "react";

const usePokeApi = () => {
    const URL_BASE_POKEMON = "https://pokeapi.co/api/v2/pokemon";
    const URL_BASE_ARTWORK = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"

    const [pokemonList, setPokemonList] = useState( []);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const [foundPokemon, setFoundPokemon] = useState(null);

    const handleLoadMore = () => {
        if (currentPage === 132) return;

        setCurrentPage((prev) => prev + 1);
        console.log("Página atual:", currentPage);
    }

    const fetchPokemonList = useCallback(async () => {
        const offset = (currentPage - 1) * 10;

        setLoading(true);
        try {
            const response = await fetch(`${URL_BASE_POKEMON}?offset=${offset}&limit=10`)
                .then(response => response.json());

            const pokemon = await Promise.all(response.results.map(async (pokemon) => {
                const pokemonDetails = await fetch(pokemon.url)
                    .then(response => response.json());

                return {
                    id: pokemonDetails.id,
                    name: pokemonDetails.name,
                    artwork: `${URL_BASE_ARTWORK}${pokemonDetails.id}.png`,
                    types: pokemonDetails.types.map(typeInfo => typeInfo.type.name),
                };
            }));

            console.log("Pokemon encontrados", pokemon);
            console.log("Setando lista de pokemon");

            setPokemonList(prevList => [...prevList, ...pokemon]);
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false);
        }
    }, [currentPage]);

    const searchPokemon = useCallback(async (nameOrId) => {
        setLoading(true);
        try {
            const response = await fetch(`${URL_BASE_POKEMON}/${nameOrId.toLowerCase()}`)
                .then(response => response.json());

            if (response.name) {
                const pokemon = {
                    id: response.id,
                    name: response.name,
                    artwork: `${URL_BASE_ARTWORK}${response.id}.png`,
                    types: response.types.map(typeInfo => typeInfo.type.name),
                };
                setFoundPokemon(pokemon);
                setLoading(false);
                return;
            }

            setFoundPokemon(null);
            setLoading(false);
        } catch (err) {
            console.error(err);
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchPokemonList();
    }, [currentPage]);


    return {
        pokemonList,
        loading,
        handleLoadMore,
        searchPokemon,
        foundPokemon
    };
}

export default usePokeApi;