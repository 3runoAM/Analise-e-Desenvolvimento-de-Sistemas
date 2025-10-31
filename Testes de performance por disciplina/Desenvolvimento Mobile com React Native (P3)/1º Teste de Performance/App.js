import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import Card from './components/Card.js';

export default function App() {
  const imageUri = "../assets/image.png";
  const name = "Bruno Martins";

  const functionName = "Desenvolvedor web e estudante de Análise de Sistemas"
  const bio = "Comecei a estudar programação em 2022, de lá para cá passei por algumas linguagens de programação e frameworks, mas Java e Spring tem um lugar especial no meu coração. Hoje sou um desenvolvedor júnior no centro universitário da minha cidade e me considero um desenvolvedor back-end, que tenta desenvolver interfaces interessantes."

  const contactInfo = {
    email: "brunomartins@al.infnet.edu.br",
    github: "github.com/3runoAM"
  }


  return (
    <SafeAreaProvider>
      <SafeAreaView style={ style.app }>

        <Card 
          imnageUri={imageUri}
          name={name}
          functionName={functionName}
          bio={bio}
          contactInfo={contactInfo} 
        />

      </SafeAreaView>
    </SafeAreaProvider>
    
  );
}

const style = StyleSheet.create({
  app: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  } 
})