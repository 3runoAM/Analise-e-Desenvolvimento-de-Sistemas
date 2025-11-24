import {ActivityIndicator, StyleSheet, View, FlatList, Text, TextInput} from 'react-native';
import usePokeApi from "../hooks/usePokeApi";
import PokemonCard from "../components/PokemonCard";
import {useState} from "react";

export default function Home() {
    const {pokemonList, loading, handleLoadMore, searchPokemon, foundPokemon} = usePokeApi();

    const [query, setQuery] = useState("");

    const handleChange = (value) => {
        setQuery(value);
        searchPokemon(value);
    }

    return (
        <>
            <Text style={styles.title}>Lista de Pokemon</Text>

            <TextInput style={styles.searchInput}
                       value={query}
                       onChangeText={handleChange}
                       placeholder="Buscar por nome ou id"/>

            <View style={styles.container}>{loading && <ActivityIndicator size="large" color="#e3350e"/>}</View>

            {
                foundPokemon ?
                    <FlatList data={[foundPokemon]}
                              contentContainerStyle={styles.pokemonList}
                              renderItem={
                                  ({item}) => (
                                      <PokemonCard key={item.id} pokemon={item}/>
                                  )
                              }/>
                    :
                    <FlatList data={pokemonList}
                              contentContainerStyle={styles.pokemonList}
                              renderItem={
                                  ({item}) => (
                                      <PokemonCard key={item.id} pokemon={item}/>
                                  )
                              }
                              onEndReached={() => {
                                  if (!loading) handleLoadMore();
                              }}
                              onEndReachedThreshold={0.5}/>
            }

            <View style={styles.container}>{loading && <ActivityIndicator size="large" color="#e3350e"/>}</View>
        </>
    )
}


const styles = StyleSheet.create({
    searchInput: {
        width: "100%",
        height: 40,
        backgroundColor: "white",
        border: "1px solid #a3a3a3",
        borderRadius: 16,
        padding: 8,
        paddingLeft: 24,
    },
    container: {
        padding: 8
    },
    title: {
        fontSize: 24,
        padding: 16,
    },
    pokemonList: {
        maxWidth: '100%',
        flexDirection: 'column',
        gap: 16,
        alignItems: 'center',
        padding: 16,
        marginBottom: 16,
    },
});