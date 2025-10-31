import { View, Text, Image, StyleSheet } from 'react-native';

export default function Card({imageUri, name, functionName, bio, contactInfo}){
  return (
    <View style={styles.container}>  
      <View>        
        <Image style={styles.avatar} source={require("../assets/image.png")} />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.h1} >
          {name}
        </Text>

        <Text style={styles.functionName} >
          {functionName}
        </Text>

        <Text style={styles.bio} >
          "{bio}"
        </Text>
      </View>
      

      <View style={styles.div} />


      <View >
         <Text style={styles.contactInfo} >
          E-mail: {contactInfo.email}
        </Text>

        <Text style={styles.contactInfo} >
          Github: {contactInfo.github}
        </Text>
      </View>     
    </View>
  );
}


const styles = StyleSheet.create({
  avatar: {
    width: 100,
    height: 100
  },
  container: {
    textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    backgroundColor: "#003f7a",
    width: 340,
    padding: 20,  
    borderRadius: 10,
  },
  infoContainer: {
    textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  h1: {
    fontSize: 30,
    fontWeight: 'bold',
    color: "#ffffff"
  },
  bio: {
    width: 300,
    fontSize: 18,
    margin: 0,
    color: "#ffffff"
  },
  functionName: {
    fontSize: 16,
    color: "#ffffff",
    textAlign: "center",
  },
  div: {
    height: 1,
    width: 180,
    backgroundColor: "#3e045e",
    margin: 0
  },
  contactInfo: {
    color: "#ffffff"
  }
});
