import {ActivityIndicator, Image, Pressable, Text, View, StyleSheet, ScrollView, FlatList} from "react-native";
import {useEffect, useState} from "react";
import useApi from "../hooks/useApi";

export default function MealDetails({route}) {
    const {item} = route.params;

    const [ingredientsByMeasure, setIngredientsByMeasure] = useState([]);

    const {
        loading,
        fetchMealById,
        mealDetails
    } = useApi();

    useEffect(() => {
        const loadMealDetails = async () => await fetchMealById(item.idMeal);

        loadMealDetails();
    }, [])

    useEffect(() => {
        if (mealDetails && ingredientsByMeasure.length === 0) {
            for (let i = 1; i <= 20; i++) {
                const ingredient = mealDetails[`strIngredient${i}`];
                const measure = mealDetails[`strMeasure${i}`];

                const INGREDIENT_PREDICATE = ingredient && ingredient.trim() !== "";
                const MEASURE_PREDICATE = measure && measure.trim() !== "";

                if (INGREDIENT_PREDICATE && MEASURE_PREDICATE) {
                    setIngredientsByMeasure((prev) => [...prev, {ingredient: ingredient, measure: measure}]);
                }
            }
        }
    }, [mealDetails]);

    return (
        <ScrollView>
            {loading && <ActivityIndicator size="large" color="#e3350e"/>}

            {mealDetails && (
                <View style={[styles.container, styles.marginTop]}>
                    <Image source={{uri: item.strMealThumb}} alt={mealDetails.strMeal} style={styles.mealImage}/>

                    <Text style={styles.header1}>{mealDetails.strMeal}</Text>

                    <View>
                        <Text>Category: {mealDetails.strCategory}</Text>
                        <Text>Area: {mealDetails.strArea}</Text>
                    </View>

                    <View style={styles.container}>
                        <Text style={styles.header2}>Ingredients</Text>

                        <FlatList data={ingredientsByMeasure}
                                  keyExtractor={(item) => item.ingredient}
                                  renderItem={({item}) => (
                                      <Text style={{marginBottom: 4}}>{item.measure} - {item.ingredient}</Text>
                                  )}/>
                    </View>

                    <View style={styles.container}>
                        <Text style={styles.header2}>Instructions</Text>

                        <FlatList data={mealDetails.strInstructions.split("\n")}
                                  keyExtractor={(item, index) => index.toString()}
                                  renderItem={({item}) => (
                                      <Text style={{marginBottom: 8}}>{item}</Text>
                                  )}/>
                    </View>
                </View>
            )}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mealImage: {
        width: 300,
        height: 300,
        borderRadius: 10,
    },
    header1: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    header2: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
    },
    marginTop: {
        marginTop: 16,
    }
})