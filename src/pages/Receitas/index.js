import React from 'react';
import { FlatList } from 'react-native';
import {
    BoxCategorias,
    BoxImagemReceita,
    BoxInput,
    BoxLogo,
    BoxReceitas,
    BoxTextInfo,
    ButtonReceitas,
    CartaoCategoria,
    Container,
    IconePesquisar,
    ImagemReceita,
    Logo,
    Pesquisar,
    TextButton,
    TextCartao,
    TextInfo,
    Titulo,
    PaginaReceitas,
    BotaoFavorito,
} from './styles';
import {Alert} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Categorias from './FlatListCategorias';
import Perfil from '../Perfil/perfilLogin';

export default function Receitas({navigation}) {
    return (
        <Container >
            <BoxLogo>
                <Logo
                    source={require('../../../assets/imagens/logo.png')}
                />
                <ButtonReceitas>
                    <TextButton>Receitas</TextButton>
                </ButtonReceitas>
            </BoxLogo>

            <BoxInput>
                <Pesquisar placeholder="Strogonoff de Frango" />
                <IconePesquisar activeOpacity={0.7}>
                    <FontAwesome name="search" size={24} color="#000" />
                </IconePesquisar>
            </BoxInput>

            <PaginaReceitas vertical={true}>
            <BoxCategorias>
                <Titulo>Categorias</Titulo>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={Categorias}
                    renderItem={({ item }) => (
                        <CartaoCategoria activeOpacity={1}>
                            <TextCartao>
                                {item.nome}
                                {'  '}
                                <FontAwesome5 name={item.icone} size={20} color="black" />

                            </TextCartao>
                        </CartaoCategoria>
                    )}
                    keyExtractor={(item) => {item.uid}}
                />
            </BoxCategorias>


            <FlatList
                style={{ marginBottom: 35, marginTop: 10 }}
                showsVerticalScrollIndicator={false}
                data={dataMassas}
                renderItem={({ item }) => (
                    <BoxReceitas activeOpacity={1} style={{ backgroundColor: item.uid % 2 == 0 ? '#FCF3C2' : '#FAB111' }}>
                        <BoxImagemReceita>
                            <ImagemReceita
                                source={item.imagemReceita}
                            />
                        </BoxImagemReceita>

                        <BoxTextInfo>
                            <TextInfo>{item.nomeReceita}</TextInfo>
                            <TextInfo>Dificuldade: {item.dificuldade}</TextInfo>
                            <TextInfo>Tempo de preparo: {item.tempoPreparo}</TextInfo>
                            <BotaoFavorito
                                activeOpacity={0.8}
                                style={{ backgroundColor: item.uid % 2 == 0 ? '#FAB111' : '#FCF3C2'}}
                                onPress={() => {navigation.navigate('Perfil'), Alert.alert('Aviso', 'Acesse sua conta para marcar como favorito')}}
                            >
                                <FontAwesome5 name="heart" size={22} color="black"/>
                            </BotaoFavorito>
                        </BoxTextInfo>
                    </BoxReceitas>
                )}
                keyExtractor={(item) => { item.uid }}
            />
            </PaginaReceitas>

        </Container>
    )
}

const dataMassas = [
    {
        uid: 1,
        nomeReceita: 'Pizza de Mussarela',
        dificuldade: 'Fácil',
        tempoPreparo: '45min',
        imagemReceita: require('../../../assets/imagens/foods/pizzaMussarela.jpg'),
        icone: "hamburger",
    },
    {
        uid: 2,
        nomeReceita: 'Pizza de Mussarela',
        dificuldade: 'Fácil',
        tempoPreparo: '45min',
        imagemReceita: require('../../../assets/imagens/foods/frutas.jpg'),
        icone: "hamburger"
    },
    {
        uid: 3,
        nomeReceita: 'Pizza de Mussarela',
        dificuldade: 'Fácil',
        tempoPreparo: '45min',
        imagemReceita: require('../../../assets/imagens/foods/lasanha.png'),
        icone: "hamburger"
    },
    {
        uid: 4,
        nomeReceita: 'Pizza de Mussarela',
        dificuldade: 'Fácil',
        tempoPreparo: '45min',
        imagemReceita: require('../../../assets/imagens/foods/x.png'),
        icone: "hamburger"
    },
    {
        uid: 5,
        nomeReceita: 'Pizza de Mussarela',
        dificuldade: 'Fácil',
        tempoPreparo: '45min',
        imagemReceita: require('../../../assets/imagens/foods/waffles.png'),
        icone: "hamburger"
    },
    {
        uid: 6,
        nomeReceita: 'Pizza de Mussarela',
        dificuldade: 'Fácil',
        tempoPreparo: '45min',
        imagemReceita: require('../../../assets/imagens/foods/massas.png'),
        icone: "hamburger"
    },
    {
        uid: 7,
        nomeReceita: 'Pizza de Mussarela',
        dificuldade: 'Fácil',
        tempoPreparo: '45min',
        imagemReceita: require('../../../assets/imagens/foods/bolacha.png'),
        icone: "hamburger"
    }
]