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
} from './styles';
import { FontAwesome } from '@expo/vector-icons';
import Categorias from './FlatListCategorias';

export default function Receitas() {
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
                            <TextInfo>{item.nomeReceita}{'\n'}</TextInfo>
                            <TextInfo>Dificuldade: {item.dificuldade}{'\n'}</TextInfo>
                            <TextInfo>Tempo de preparo: {item.tempoPreparo}{'\n'}</TextInfo>
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
        imagemReceita: require('../../../assets/imagens/foods/pizzaMussarela.jpg')    
    },
    {
        uid: 2,
        nomeReceita: 'Pizza de Mussarela',
        dificuldade: 'Fácil',
        tempoPreparo: '45min',
        imagemReceita: require('../../../assets/imagens/foods/frutas.jpg')    
    },
    {
        uid: 3,
        nomeReceita: 'Pizza de Mussarela',
        dificuldade: 'Fácil',
        tempoPreparo: '45min',
        imagemReceita: require('../../../assets/imagens/foods/lasanha.png')    
    },
    {
        uid: 4,
        nomeReceita: 'Pizza de Mussarela',
        dificuldade: 'Fácil',
        tempoPreparo: '45min',
        imagemReceita: require('../../../assets/imagens/foods/x.png')    
    },
    {
        uid: 5,
        nomeReceita: 'Pizza de Mussarela',
        dificuldade: 'Fácil',
        tempoPreparo: '45min',
        imagemReceita: require('../../../assets/imagens/foods/waffles.png')    
    },
    {
        uid: 6,
        nomeReceita: 'Pizza de Mussarela',
        dificuldade: 'Fácil',
        tempoPreparo: '45min',
        imagemReceita: require('../../../assets/imagens/foods/massas.png')    
    },
    {
        uid: 7,
        nomeReceita: 'Pizza de Mussarela',
        dificuldade: 'Fácil',
        tempoPreparo: '45min',
        imagemReceita: require('../../../assets/imagens/foods/bolacha.png')    
    }
]