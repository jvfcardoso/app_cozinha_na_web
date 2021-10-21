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
} from './styles';
import { FontAwesome } from '@expo/vector-icons';



export default function Receitas(){
    return(
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
                <Pesquisar placeholder="Strogonoff de Frango"/>
                <IconePesquisar activeOpacity={0.7}>
                    <FontAwesome name="search" size={24} color="#000" />
                </IconePesquisar>
            </BoxInput>

            <Titulo>Categorias</Titulo>
            <BoxCategorias horizontal={true} showsHorizontalScrollIndicator={false}>
                <CartaoCategoria activeOpacity={0.8}>
                    <TextCartao>
                        Hambúrgueres
                    </TextCartao>
                </CartaoCategoria>

                <CartaoCategoria activeOpacity={0.8}>
                <TextCartao>
                        Massas
                    </TextCartao>
                </CartaoCategoria>

                <CartaoCategoria activeOpacity={0.8}>
                <TextCartao>
                        Bebidas
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
            </BoxCategorias>


                <FlatList
                    style={{marginBottom:35, marginTop:10}}
                    data={dataMassas}
                    renderItem={({item}) => (
                        <BoxReceitas activeOpacity={0.8}>
                            <BoxImagemReceita>
                                <ImagemReceita
                                    source={require('../../../assets/imagens/foods/pizzaMussarela.jpg')}
                                />
                            </BoxImagemReceita>

                            <BoxTextInfo>
                                <TextInfo>{item.nomeReceita}{'\n'}</TextInfo>
                                <TextInfo>Dificuldade: {item.dificuldade}{'\n'}</TextInfo>
                                <TextInfo>Tempo de preparo: {item.tempoPreparo}{'\n'}</TextInfo>
                            </BoxTextInfo>
                        </BoxReceitas>
                    )}
                    keyExtractor={(item) => {item.uid.toString()}}
                />
            

        </Container>
    )
}

const dataMassas = [
    {
        uid:1,
        nomeReceita:'Pizza de Mussarela',
        dificuldade:'Fácil',
        tempoPreparo:'45min',
    },
    {
        uid:2,
        nomeReceita:'Pizza de Mussarela',
        dificuldade:'Fácil',
        tempoPreparo:'45min',
     },
    {
        uid:3,
        nomeReceita:'Pizza de Mussarela',
        dificuldade:'Fácil',
        tempoPreparo:'45min',
    },
    {
        uid:4,
        nomeReceita:'Pizza de Mussarela',
        dificuldade:'Fácil',
        tempoPreparo:'45min',
     },
    {
        uid:5,
        nomeReceita:'Pizza de Mussarela',
        dificuldade:'Fácil',
        tempoPreparo:'45min',
     },
    {
        uid:6,
        nomeReceita:'Pizza de Mussarela',
        dificuldade:'Fácil',
        tempoPreparo:'45min',
    },
    {
        uid:7,
        nomeReceita:'Pizza de Mussarela',
        dificuldade:'Fácil',
        tempoPreparo:'45min',
    }
]