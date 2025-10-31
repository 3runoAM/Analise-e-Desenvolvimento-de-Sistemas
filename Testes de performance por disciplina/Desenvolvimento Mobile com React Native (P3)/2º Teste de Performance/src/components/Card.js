import { Pressable, View, Text, StyleSheet } from 'react-native';

export default function Card({ navigation, item }){
  return (
    <Pressable onPress={() => navigation.navigate('gameDetails', { item })}>
      <View style={styles.container}>
        <Text style={styles.name}>
          {item.nome}
        </Text>

        <View style={styles.list}>
          <Text  style={styles.bold}>Plataformas: </Text>
          <Text>  {item.plataforma.join(", ")}</Text>
        </View>

        <View>
           <Text style={styles.bold}>Preço: </Text>
           <Text>   ${item.preco.toFixed(2)}</Text> 
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
    padding: 16,
    backgroundColor: "#6f808f",
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 700,
  },
  bold: {
    fontWeight: 700
  },
  list: {
    flexDirection: "column"
  }
})