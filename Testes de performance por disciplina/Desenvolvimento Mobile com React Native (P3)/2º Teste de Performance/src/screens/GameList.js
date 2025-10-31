import { ScrollView, View, StyleSheet } from 'react-native';
import Card from '../components/Card';
import itemList from '../assets/ItemList';

export default function GameList({ navigation }) {
  
  return (
    <ScrollView>
     {
       itemList.map(
         item =>
         <View style={styles.container}>
          <Card item={item} navigation={navigation} />
         </View>          
        )
     }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
})