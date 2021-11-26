import React, {useRef} from 'react';
import { FlatList, Alert } from 'react-native';
import {
    BoxCategorias,
    BoxImagemReceita,
    BoxLogo,
    BoxReceitas,
    BoxTextInfo,
    ButtonReceitas,
    Container,
    ImagemReceita,
    Logo,
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
import {
    TituloReceita,
    BannerReceita,
    Banner,
    TituloIngredientes,
    ListaIngredientes,
    ViewReceitas,
    TituloModoPreparo,
    ModoPreparo,
    BoxIngredientes,
    BoxModoPreparo,
} from '../Receitas/TelaReceitas/styles';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import {Modalize} from 'react-native-modalize';
import {Info} from '../Receitas/TelaReceitas/InfoReceitas';

export default function Receitas({navigation}) {
    const modalizeRef = useRef(null);

    function onOpen(){
        modalizeRef.current?.open();
    }
    return (
        <Container >
            <Modalize
                ref={modalizeRef}
                snapPoint={800}
                withOverlay={false}
            >
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={Info}
                    keyExtractor={(item) => {item.uid}}
                    renderItem={({item}) => (
                        <ViewReceitas>
                            <BannerReceita
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            >
                            <Banner
                                    source={item.ImagemBanner4}
                                    resizeMode="stretch"
                                    />
                            <Banner
                                    source={item.ImagemBanner1}
                                    resizeMode="stretch"
                                    
                            />
                            <Banner
                                    source={item.ImagemBanner2}
                                    resizeMode="stretch"
                                    
                                    />
                            <Banner
                                    source={item.ImagemBanner3}
                                    resizeMode="stretch"
                                    
                                    />
                            </BannerReceita>
        
                            <TituloReceita>
                                {item.nomeReceita}
                            </TituloReceita>

                            <TituloIngredientes>
                                Ingredientes
                            </TituloIngredientes>
                            
                            <BoxIngredientes>
                                <ListaIngredientes>
                                    {item.ingredientes}
                                </ListaIngredientes>
                            </BoxIngredientes>

                            <TituloModoPreparo>
                                Modo de Preparo
                            </TituloModoPreparo>

                            <BoxModoPreparo>
                                <ModoPreparo>
                                    {item.modoPreparo}
                                </ModoPreparo>
                            </BoxModoPreparo>

                        </ViewReceitas>
                    )}
                />
            </Modalize>

            <BoxLogo>
                <Logo
                    source={require('../../../assets/imagens/logo.png')}
                />
                <ButtonReceitas>
                    <TextButton>Receitas</TextButton>
                </ButtonReceitas>
            </BoxLogo>

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
                        style={{ backgroundColor: item.uid % 2 == 0 ? '#FBF6E3' : '#FAB111' }}
                        onPress={() => onOpen()}
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
                                    onPress={() => {navigation.navigate('Perfil'), Alert.alert('Aviso', 'Acesse sua conta para marcar como favorito')}}
                                    >
                                    <FontAwesome5 name="heart" size={22} color="#000"/>
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

const dataReceitas = [
    {
        uid: '1',
        nomeReceita: 'Pizza de Mussarela',
        tipoReceita: 'Massas',
        dificuldade: 'Fácil',
        tempoPreparo: '45min',
        imagemReceita: require('../../../assets/imagens/foods/pizzaMussarela.jpg'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />
    },
    {
        uid: '2',
        nomeReceita: 'Salada de Frutas',
        tipoReceita: 'Saladas',
        dificuldade: 'Difícil',
        tempoPreparo: '30min',
        imagemReceita: require('../../../assets/imagens/foods/frutas.jpg'),
        iconeDificuldade: <FontAwesome name="star" size={15} color="black" />
    },
    {
        uid: '3',
        nomeReceita: 'Lasanha',
        tipoReceita: 'Massas',
        dificuldade: 'Médio',
        tempoPreparo: '60min',
        imagemReceita: require('../../../assets/imagens/foods/lasanha.png'),
        iconeDificuldade: <FontAwesome name="star-half-empty" size={15} color="black" />

    },
    {
        uid: '4',
        nomeReceita: 'X-Burguer',
        tipoReceita: 'Hambúrgueres',
        dificuldade: 'Fácil',
        tempoPreparo: '25min',
        imagemReceita: require('../../../assets/imagens/foods/x.png'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />
    },
    {
        uid: '5',
        nomeReceita: 'Waffles',
        tipoReceita: 'Massas',
        dificuldade: 'Fácil',
        tempoPreparo: '30min',
        imagemReceita: require('../../../assets/imagens/foods/waffles.png'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />

    },
    {
        uid: '6',
        nomeReceita: 'Macarrão com Molho Vermelho',
        tipoReceita: 'Massas',
        dificuldade: 'Médio',
        tempoPreparo: '45min',
        imagemReceita: require('../../../assets/imagens/foods/massas.png'),
        iconeDificuldade: <FontAwesome name="star-half-empty" size={15} color="black" />

    },
    {
        uid: '7',
        nomeReceita: 'Cookies',
        tipoReceita: 'Sobremesas',
        dificuldade: 'Fácil',
        tempoPreparo: '50min',
        imagemReceita: require('../../../assets/imagens/foods/bolacha.png'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />

    }
]