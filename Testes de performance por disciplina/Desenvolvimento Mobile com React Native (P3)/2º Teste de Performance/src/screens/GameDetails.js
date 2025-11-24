import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

export default function GameDetails({ route }) {
  const { item } = route.params;

  return (
    <ScrollView>
      <View style={styles.smallGap}>
        <Image source={{uri: item.imagemUri}} style={styles.image} />
        <Text style={styles.title}>{item.nome}</Text>

        <View style={styles.flexRow}>
          <Text style={styles.bold}>Gênero: </Text>
          <Text>{item.genero}</Text>
        </View>
        
        <View style={styles.flexRow}>
          <Text  style={styles.bold}>Plataformas: </Text>
          <Text>{item.plataforma.join(", ")}</Text>
        </View>

        <View style={styles.flexRow}>
          <Text style={styles.bold}>Ano de lançamento: </Text>
          <Text>{item.anoLancamento}</Text>
        </View>

        <View style={styles.flexRow}>
          <Text style={styles.bold}>Desenvolvedora: </Text>
          <Text>{item.desenvolvedora}</Text>
        </View>

        <View style={styles.flexRow}>
          <Text style={styles.bold}>Classificação: </Text>
          <Text>{item.classificacao}</Text>
        </View>

        <View style={styles.flexRow}>
          <Text style={styles.bold}>Preço: </Text>
          <Text>${item.preco.toFixed(2)}</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
    borderRadius: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  flexRow: {
    flexDirection: "row",
  },
  bold: {
    fontWeight: 600,
  },
  smallGap: {
    gap: 8,
  }
});