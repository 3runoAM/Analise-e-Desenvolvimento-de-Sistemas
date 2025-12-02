import {Image, Pressable, Text, View} from "react-native";

export default function MealCard({navigation, item, styles}) {
    return (
        <Pressable onPress={() => navigation.navigate("mealDetails", {item})} style={styles.recipeCard}>
            <Text style={styles.mealName}>{item.strMeal}</Text>

            <Image style={styles.mealImage} source={{uri: item.strMealThumb}}/>
        </Pressable>
    )
}