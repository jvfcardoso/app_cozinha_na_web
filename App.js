import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './components/routes';
import { StatusBar } from 'expo-status-bar';
import AppIntroSlider from 'react-native-app-intro-slider';
import {View, Text, Image, StyleSheet} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const slides = [
  {
    key: '1',
    title: 'Bem-vindo ao Cozinha na Web',
    text: 'Onde aprender a cozinhar se torna divertido e interativo, independente de sua idade',
    image: require('./assets/imagens/slider/2.png'),
  },
  {
    key: '2',
    title: 'Culinária saudável para todos',
    text: 'Prepare receitas deliciosas e saudáveis para si ou para quem ama no conforto de sua casa',
    image: require('./assets/imagens/slider/1.png'),
  },
  {
    key: '3',
    title: 'Receitas para todos',
    text: 'Pensado na praticidade, qualquer um pode desfrutar do prazer de cozinhar o que gosta',
    image: require('./assets/imagens/slider/3.png'),
  },

]

export default function App({navigation}) {
  const [showHome, setShowHome] = useState(false);

function renderSlides({item}){
  return(
    <View style={{flex: 1}}>
      <Image
        source={item.image}
        style={{
          resizeMode: 'cover',
          height:'73%',
          width: '100%',
        }}
      />
      <Text
      style={{
        paddingTop: 25,
        paddingBottom: 10,
        fontSize: 23,
        fontWeight: 'bold',
        color: '#FAB111',
        alignSelf: 'center',
      }}>
        {item.title}
      </Text>
      <Text
      style={{
        textAlign: 'center',
        color: '#b2b2b2',
        paddingHorizontal: 25,
        fontSize: 20,
      }}>
        {item.text}
      </Text>
    </View>
  )
}

  if(showHome){
    return ( 
      <NavigationContainer>
        <StatusBar hidden={true}/>
        <Routes />
      </NavigationContainer>
    )
  }else{
    return(
    <AppIntroSlider
      renderItem={renderSlides}
      data={slides}
      activeDotStyle={{
        backgroundColor: '#FAB111',
        width: 30,
      }}
      renderNextButton={() => <MaterialIcons name="navigate-next" size={30} color="#FAB111" />}
      renderDoneButton={() => <Text style={styles.botaoAcesso}>Acessar</Text>}
      onDone={() => setShowHome(true)}
    />
    )
  }

}

const styles = StyleSheet.create({
  botaoAcesso:{
    backgroundColor: '#FAB111',
    borderRadius: 5,
    width: 70,
    height: 30,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5,
    fontWeight: 'bold'
  }
})