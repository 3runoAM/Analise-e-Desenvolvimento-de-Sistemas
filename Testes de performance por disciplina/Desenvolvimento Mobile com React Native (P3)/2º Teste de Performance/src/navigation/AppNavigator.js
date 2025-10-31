import { StyleSheet, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GameList from '../screens/GameList';
import GameDetails from '../screens/GameDetails';

export default function AppNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="gameList">
          <Stack.Screen name="gameList"
                        component={ GameList }
                        options={{title: "Lista de jogos"}} />

          <Stack.Screen name="gameDetails"
                        component={ GameDetails }
                        options={{title: "Detalhes do jogo"}} />
        
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
