import {Text, View, Image, StyleSheet} from "react-native";

export default function PokemonCard({pokemon}) {
    return (
        <View style={styles.pokemonCard} key={pokemon.id}>


            <Image source={{uri: pokemon.artwork}}
                   accessibilityLabel={pokemon.name}
                   style={styles.pokeImage}/>



            <View style={styles.pokemonInfo}>
                <View style={styles.pokemonInfo}>
                    <Text style={styles.pokemonName}>
                        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                    </Text>


                    <Text style={styles.pokemonNumber}>
                        #{pokemon.id < 1000 ? String(pokemon.id).padStart(4, '0') : pokemon.id}
                    </Text>
                </View>




                <View style={styles.pokemonInfo}>
                    {pokemon.types && pokemon.types.map(type => (
                        <View key={type}>
                            <Text style={[styles.typeCard, styles[type]]}>
                                {type.charAt(0).toUpperCase() + type.slice(1)}
                            </Text>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    pokemonCard: {
        flexDirection: "row",
        gap: 36,
        padding: 16,
        borderRadius: 10,
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
        backgroundColor: "white",
    },

    pokeImage: {
        width: 100,
        height: 100,
    },

    pokemonInfo: {
        flexDirection: "column",
        width: 150,
        gap: 6,
    },

    pokemonName: {
        fontSize: 18,
        fontWeight: 700,
    },

    pokemonNumber: {
        fontWeight: 900,
        color: "#a3a3a3",
    },

    typeCard: {
        padding: 4,
        fontSize: 16,
        fontWeight: 600,
        textAlign: "center",
        borderRadius: 6,
    },

    grass: {
        backgroundColor: "#9acc50",
    },
    poison: {
        backgroundColor: "#b97fc9",
    },
    fire: {
        backgroundColor: "#fc7e23",
    },
    water: {
        backgroundColor: "#4591c4",
    },
    bug: {
        backgroundColor: "#729e3f",
    },
    normal: {
        backgroundColor: "#a5adb0",
    },
    electric: {
        backgroundColor: "#edd434",
    },
    fairy: {
        backgroundColor: "#fcb8e8",
    },
    fighting: {
        backgroundColor: "#d66722",
    },
    psychic: {
        backgroundColor: "#f266b8",
    },
    steel: {
        backgroundColor: "#9eb7b8",
    },
    ice: {
        backgroundColor: "#51c4e8",
    },
    ghost: {
        backgroundColor: "#7b62a3",
    },
    rock: {
        backgroundColor: "#a38c21",
    },
    dark: {
        backgroundColor: "#707070",
    },
    dragon: {
        backgroundColor: "#f16e57",
    },
    flying: {
        backgroundColor: "#3dc7ef",
    },
    ground: {
        backgroundColor: "#dec16b",
    },
})