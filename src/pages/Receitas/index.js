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
    TitleInfo,

} from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

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

            <PaginaReceitas showsVerticalScrollIndicator={false}>
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
                    data={dataReceitas}
                    renderItem={({ item }) => (
                        <BoxReceitas
                        activeOpacity={0.8}
                        style={{ backgroundColor: item.uid % 2 == 0 ? '#FCF3C2' : '#FAB111' }}
                        onPress={() => navigation.navigate('TelaReceitas')}
                        >
                            <BoxImagemReceita>
                                <ImagemReceita
                                    source={item.imagemReceita}
                                    />
                            </BoxImagemReceita>

                            <BoxTextInfo>
                                <TitleInfo>{item.nomeReceita}</TitleInfo>
                                <TextInfo><MaterialIcons name="category" size={15} color="black" />  {item.tipoReceita}</TextInfo>
                                <TextInfo>{item.iconeDificuldade}{'  '}{item.dificuldade}</TextInfo>
                                <TextInfo><FontAwesome5 name="hourglass-start" size={15} color="black" />  {item.tempoPreparo}</TextInfo>
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


function TelaReceitas({navigation}){
    return(
        <Container>
            <Titulo>Teste</Titulo>
        </Container>
    )
}

const dataReceitas = [
    {
        uid: 1,
        nomeReceita: 'Pizza de Mussarela',
        tipoReceita: 'Massas',
        dificuldade: 'Fácil',
        tempoPreparo: '45min',
        imagemReceita: require('../../../assets/imagens/foods/pizzaMussarela.jpg'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />
    },
    {
        uid: 2,
        nomeReceita: 'Salada de Frutas',
        tipoReceita: 'Saladas',
        dificuldade: 'Difícil',
        tempoPreparo: '30min',
        imagemReceita: require('../../../assets/imagens/foods/frutas.jpg'),
        iconeDificuldade: <FontAwesome name="star" size={15} color="black" />
    },
    {
        uid: 3,
        nomeReceita: 'Lasanha',
        tipoReceita: 'Massas',
        dificuldade: 'Médio',
        tempoPreparo: '60min',
        imagemReceita: require('../../../assets/imagens/foods/lasanha.png'),
        iconeDificuldade: <FontAwesome name="star-half-empty" size={15} color="black" />

    },
    {
        uid: 4,
        nomeReceita: 'X-Burguer',
        tipoReceita: 'Hambúrgueres',
        dificuldade: 'Fácil',
        tempoPreparo: '25min',
        imagemReceita: require('../../../assets/imagens/foods/x.png'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />
    },
    {
        uid: 5,
        nomeReceita: 'Waffles',
        tipoReceita: 'Massas',
        dificuldade: 'Fácil',
        tempoPreparo: '30min',
        imagemReceita: require('../../../assets/imagens/foods/waffles.png'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />

    },
    {
        uid: 6,
        nomeReceita: 'Macarrão com Molho Vermelho',
        tipoReceita: 'Massas',
        dificuldade: 'Médio',
        tempoPreparo: '45min',
        imagemReceita: require('../../../assets/imagens/foods/massas.png'),
        iconeDificuldade: <FontAwesome name="star-half-empty" size={15} color="black" />

    },
    {
        uid: 7,
        nomeReceita: 'Cookies',
        tipoReceita: 'Sobremesas',
        dificuldade: 'Fácil',
        tempoPreparo: '50min',
        imagemReceita: require('../../../assets/imagens/foods/bolacha.png'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />

    }
]