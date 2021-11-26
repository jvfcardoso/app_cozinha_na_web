import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './components/routes';
import { StatusBar } from 'expo-status-bar';
import AppIntroSlider from 'react-native-app-intro-slider';
import { MaterialIcons } from '@expo/vector-icons';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const slides = [
  {
    key: '1',
    title: 'Bem-vindo ao Cozinha na Web',
    text: 'Onde aprender a cozinhar se torna divertido e interativo, independente de sua idade',
    image: require('./assets/imagens/slider/gif1.gif'),
  },
  {
    key: '2',
    title: 'Culinária saudável para todos',
    text: 'Prepare receitas deliciosas e saudáveis para si ou para quem ama no conforto de sua casa',
    image: require('./assets/imagens/slider/gif2.gif'),
  },
  {
    key: '3',
    title: 'Variedade de receitas',
    text: 'Encontre uma diversidade de receitas que irá agradar os mais diversos paladares',
    image: require('./assets/imagens/slider/gif3.gif'),
  },

]

export default function App({navigation}) {
  const [showHome, setShowHome] = useState(true);

function renderSlides({item}){
  return(
    <View style={{flex: 1}}>
      <Image
        source={item.image}
        style={{
          resizeMode: 'contain',
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
      renderDoneButton={() => 
      <TouchableOpacity 
        style={styles.botaoAcesso}
        activeOpacity={0.8}
        onPress={() => setShowHome(true)}
      >
        <Text style={styles.textoBotao}>Acessar</Text>
      </TouchableOpacity>}
    />
    )
  }

}

const styles = StyleSheet.create({
  botaoAcesso:{
    backgroundColor: '#FAB111',
    borderRadius: 15,
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  textoBotao:{
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
  }
})