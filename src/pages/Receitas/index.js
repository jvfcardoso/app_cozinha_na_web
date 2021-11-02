import React from 'react';
import { FlatList, Alert } from 'react-native';
import {
    BoxCategorias,
    BoxImagemReceita,
    BoxInput,
    BoxLogo,
    BoxReceitas,
    BoxTextInfo,
    ButtonReceitas,
    Container,
    IconePesquisar,
    ImagemReceita,
    Logo,
    Pesquisar,
    TextButton,
    Categorias,
    TextInfo,
    Titulo,
    PaginaReceitas,
    BotaoFavorito,
    CartaoCategoria,
    TextCartao,
} from './styles';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
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

            <PaginaReceitas>
                <BoxCategorias>
                    <Titulo>Categorias</Titulo>
                    <Categorias horizontal={true} showsHorizontalScrollIndicator={false}>
                        <CartaoCategoria activeOpacity={0.8}>
                            <TextCartao>
                                Massas
                            </TextCartao>
                        </CartaoCategoria>
                        <CartaoCategoria activeOpacity={0.8}>
                            <TextCartao>
                                Sorvetes
                            </TextCartao>
                        </CartaoCategoria>
                        <CartaoCategoria activeOpacity={0.8}>
                            <TextCartao>
                                Sobremesas
                            </TextCartao>
                        </CartaoCategoria>
                        <CartaoCategoria activeOpacity={0.8}>
                            <TextCartao>
                                Bolos
                            </TextCartao>
                        </CartaoCategoria>
                        <CartaoCategoria activeOpacity={0.8}>
                            <TextCartao>
                                Hambúrgueres
                            </TextCartao>
                        </CartaoCategoria>
                        <CartaoCategoria activeOpacity={0.8}>
                            <TextCartao>
                                Bebidas
                            </TextCartao>
                        </CartaoCategoria>
                        
                    </Categorias>
                </BoxCategorias>


                <FlatList
                    style={{ marginBottom: 35, marginTop: 10 }}
                    showsVerticalScrollIndicator={false}
                    data={dataMassas}
                    renderItem={({ item }) => (
                        <BoxReceitas activeOpacity={0.8} style={{ backgroundColor: item.uid % 2 == 0 ? '#FCF3C2' : '#FAB111' }}>
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
                                    activeOpacity={0.7}
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