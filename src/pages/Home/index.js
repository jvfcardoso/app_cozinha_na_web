import React from 'react';
import {
    Container,
    TitleTipoReceitas,
    Logo,
    BoxLogo,
    ListTipoReceitas,
    FoodsTipoReceitas,
    Cartao,
    Legendas,
    TitleReceitasAgrado,
    FoodsReceitasAgrado,
    ListReceitasAgrado,
    BoxButtons,
    ButtonHome,
    TextButton,
    Banner,
    BoxBanner,
    BoxBotaoShare,
    BoxBotaoLike,
 } from './styles';
 import {MaterialCommunityIcons} from '@expo/vector-icons';

export default function Home(){
    return(
        <Container showsVerticalScrollIndicator={false}>
                <BoxLogo>
                    <Logo
                        source={require('../../../assets/imagens/logo.png')}
                    />
                    <ButtonHome>
                        <TextButton>
                            Home
                        </TextButton>
                    </ButtonHome>
                </BoxLogo>
                <BoxBanner>
                    <Banner
                        source={require('../../../assets/imagens/bannerHome.jpg')}
                    />
                </BoxBanner>

                    <TitleTipoReceitas>
                        Tipos de Receitas
                    </TitleTipoReceitas>
                
                <ListTipoReceitas horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Cartao>
                        <FoodsTipoReceitas
                                source={require('../../../assets/imagens/foods/xcheese.png')}
                        />
                        <Legendas>Hambúrgueres</Legendas>
                    </Cartao>
                    <Cartao>
                        <FoodsTipoReceitas
                                source={require('../../../assets/imagens/foods/massas.png')}
                        />
                        <Legendas>Massas</Legendas>
                    </Cartao>
                    <Cartao>
                        <FoodsTipoReceitas
                                source={require('../../../assets/imagens/foods/bebidas.png')}
                        />
                        <Legendas>Bebidas</Legendas>
                    </Cartao>
                    <Cartao>
                        <FoodsTipoReceitas
                                source={require('../../../assets/imagens/foods/sorvete.png')}
                        />
                        <Legendas>Sorvetes</Legendas>
                    </Cartao>
                    <Cartao>
                        <FoodsTipoReceitas
                                source={require('../../../assets/imagens/foods/bolo.png')}
                        />
                        <Legendas>Sobremesas</Legendas>
                    </Cartao>
                </ListTipoReceitas>

                <TitleReceitasAgrado>
                    Receitas do seu agrado
                </TitleReceitasAgrado>

                <ListReceitasAgrado  horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Cartao>
                        <FoodsReceitasAgrado
                            source={require('../../../assets/imagens/foods/sucoLaranja.png')}
                        />
                            <BoxButtons>
                                <BoxBotaoShare activeOpacity={0.7}>
                                    <MaterialCommunityIcons name="share-variant" size={24} color={'#121212'}/>
                                </BoxBotaoShare>
                                <BoxBotaoLike activeOpacity={0.7}>
                                    <MaterialCommunityIcons name="thumb-up" size={24} color={'#121212'}/>
                                </BoxBotaoLike>
                            </BoxButtons>
                    </Cartao>
                    <Cartao>
                        <FoodsReceitasAgrado
                            source={require('../../../assets/imagens/foods/waffles.png')}
                        />
                        <BoxButtons>
                            <BoxBotaoShare activeOpacity={0.7}>
                                <MaterialCommunityIcons name="share-variant" size={24} color={'#121212'}/>
                            </BoxBotaoShare>
                            <BoxBotaoLike activeOpacity={0.7}>
                                <MaterialCommunityIcons name="thumb-up" size={24} color={'#121212'}/>
                            </BoxBotaoLike>
                        </BoxButtons>
                    </Cartao>
                    <Cartao>
                        <FoodsReceitasAgrado
                            source={require('../../../assets/imagens/foods/pastel.png')}
                        />
                        <BoxButtons>
                            <BoxBotaoShare activeOpacity={0.7}>
                                <MaterialCommunityIcons name="share-variant" size={24} color={'#121212'}/>
                            </BoxBotaoShare>
                            <BoxBotaoLike activeOpacity={0.7}>
                                <MaterialCommunityIcons name="thumb-up" size={24} color={'#121212'}/>
                            </BoxBotaoLike>
                        </BoxButtons>
                    </Cartao>
                    <Cartao>
                        <FoodsReceitasAgrado
                            source={require('../../../assets/imagens/foods/feijoada.png')}
                        />
                        <BoxButtons>
                            <BoxBotaoShare activeOpacity={0.7}>
                                <MaterialCommunityIcons name="share-variant" size={24} color={'#121212'}/>
                            </BoxBotaoShare>
                            <BoxBotaoLike activeOpacity={0.7}>
                                <MaterialCommunityIcons name="thumb-up" size={24} color={'#121212'}/>
                            </BoxBotaoLike>
                        </BoxButtons>
                    </Cartao>
                    <Cartao>
                        <FoodsReceitasAgrado
                            source={require('../../../assets/imagens/foods/milkshake.png')}
                        />
                        <BoxButtons>
                            <BoxBotaoShare activeOpacity={0.7}>
                                <MaterialCommunityIcons name="share-variant" size={24} color={'#121212'}/>
                            </BoxBotaoShare>
                            <BoxBotaoLike activeOpacity={0.7}>
                                <MaterialCommunityIcons name="thumb-up" size={24} color={'#121212'}/>
                            </BoxBotaoLike>
                        </BoxButtons>
                    </Cartao>

                </ListReceitasAgrado>
        </Container>
    )
}
