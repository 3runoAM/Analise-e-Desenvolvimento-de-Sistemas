import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';

export default function AppNavigator() {
    const Stack = createNativeStackNavigator();

    return (
        <View style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="home" id="home">
                    <Stack.Screen name="home"
                                  component={Home}
                                  options={{title: "Home"}}/>
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#ecf0f1",
        padding: 8,
    },
});
