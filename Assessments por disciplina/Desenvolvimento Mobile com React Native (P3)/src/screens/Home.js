import {ActivityIndicator, StyleSheet, View, FlatList, Text, TextInput, Image, ScrollView} from 'react-native';
import useApi from "../hooks/useApi";
import {useEffect, useRef, useState} from "react";
import MealCard from "../components/MealCard";
import {Colors} from "react-native-paper";

export default function Home({ navigation }) {
    const {
        meals,
        loading,
        fetchDefaultMeals,
        searchByName
    } = useApi();

    const [query, setQuery] = useState("");
    const debounceTimeout = useRef(null);

    useEffect(() => {
        fetchDefaultMeals();
    }, []);

    useEffect(() => {
        if (query === "") return
        if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

        debounceTimeout.current = setTimeout(() => {
            searchByName(query);
            debounceTimeout.current = null;
        }, 1000);

    }, [query]);

    return (
        <ScrollView style={styles.container}>
            <TextInput style={styles.textInput}
                       value={query}
                       onChangeText={setQuery}
                       placeholder={"Search for a meal by name..."}
                       placeholderTextColor={"#b8b8b8"}/>

            {loading && <ActivityIndicator size="large" color="#e3350e"/>}

            <View style={styles.listContainer}>
                {
                    meals?.length > 0 && (
                        <FlatList data={meals}
                                  contentContainerStyle={styles.list}
                                  keyExtractor={(item) => item.idMeal}
                                  renderItem={({item}) => (
                                      <MealCard navigation={navigation} item={item} styles={styles}/>
                                  )}/>
                    )
                }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 16,
        gap: 16,
    },
    textInput: {
        width: "100%",
        height: 38,
        backgroundColor: "white",
        borderRadius: 8,
        paddingLeft: 16,
        boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
    },
    mealImage: {
        width: 150,
        height: 150,
        borderRadius: 10,
    },
    recipeCard: {
        alignItems: "center",
        gap: 16,
        marginBottom: 24,
        backgroundColor: "white",
        padding: 16,
        borderRadius: 8,
        width: 320,
        boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
    },
    listContainer: {
        paddingTop: 24,
    },
    list: {
        alignItems: "center",
    },
    mealName: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
});


