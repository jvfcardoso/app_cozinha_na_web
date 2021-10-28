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
    ButtonReceitas,
    InformacaoCartao,
    TituloInformacaoCartao,
    TipoInformacaoCartao,
    TempoInformacaoCartao,
    BotaoVerReceita,
 } from './styles';
import {Alert} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import Receitas from '../Receitas';

export default function Home({navigation}){
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
                    <ButtonReceitas activeOpacity={1} onPress={() => navigation.navigate(Receitas)}>
                    <Cartao>
                        <FoodsTipoReceitas
                                source={require('../../../assets/imagens/foods/xcheese.png')}
                        />
                        <Legendas>Hambúrgueres</Legendas>
                    </Cartao>
                    </ButtonReceitas>
                    <ButtonReceitas activeOpacity={1} onPress={() => navigation.navigate(Receitas)}>
                    <Cartao>
                        <FoodsTipoReceitas
                                source={require('../../../assets/imagens/foods/massas.png')}
                        />
                        <Legendas>Massas</Legendas>
                    </Cartao>
                    </ButtonReceitas>
                    <ButtonReceitas activeOpacity={1} onPress={() => navigation.navigate(Receitas)}>
                    <Cartao>
                        <FoodsTipoReceitas
                                source={require('../../../assets/imagens/foods/bebidas.png')}
                        />
                        <Legendas>Bebidas</Legendas>
                    </Cartao>
                    </ButtonReceitas>
                    <ButtonReceitas activeOpacity={1} onPress={() => navigation.navigate(Receitas)}>
                    <Cartao>
                        <FoodsTipoReceitas
                                source={require('../../../assets/imagens/foods/sorvete.png')}
                        />
                        <Legendas>Sorvetes</Legendas>
                    </Cartao>
                    </ButtonReceitas>
                    <ButtonReceitas activeOpacity={1} onPress={() => navigation.navigate(Receitas)}>
                    <Cartao>
                        <FoodsTipoReceitas
                                source={require('../../../assets/imagens/foods/bolo.png')}
                        />
                        <Legendas>Sobremesas</Legendas>
                    </Cartao>
                    </ButtonReceitas>
                </ListTipoReceitas>

                <TitleReceitasAgrado>
                    Receitas do seu agrado
                </TitleReceitasAgrado>

                <ListReceitasAgrado  horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Cartao>
                        <FoodsReceitasAgrado
                            source={require('../../../assets/imagens/foods/pizzaMussarela.jpg')}
                        />
                        
                        <InformacaoCartao>
                            <TituloInformacaoCartao>
                                Pizza de Mussarela
                            </TituloInformacaoCartao>

                            <TipoInformacaoCartao>
                                Massas
                            </TipoInformacaoCartao>

                            <TempoInformacaoCartao>
                                <FontAwesome5 name="clock" size={12} color="#B5B5B5"/> 45min
                            </TempoInformacaoCartao>


                            <BoxButtons>
                                <BoxBotaoLike onPress={() => {navigation.navigate('Perfil'), Alert.alert('Aviso', 'Acesse sua conta para favoritar')}}>
                                    <FontAwesome5 name="heart" size={22} color="#DB9600"/>
                                </BoxBotaoLike>
                                <BoxBotaoShare  onPress={() => {navigation.navigate('Perfil'), Alert.alert('Aviso', 'Acesse sua conta para poder compartilhar')}}>
                                    <FontAwesome5 name="code-branch" size={22} color="#DB9600"/>
                                </BoxBotaoShare>
                            </BoxButtons>
                        
                        </InformacaoCartao>
                    </Cartao>
                    <Cartao>
                        <FoodsReceitasAgrado
                            source={require('../../../assets/imagens/foods/SALADA.jpg')}
                        />

                        <InformacaoCartao>
                            <TituloInformacaoCartao>
                                Salada de Vegetais
                            </TituloInformacaoCartao>

                            <TipoInformacaoCartao>
                                Diet
                            </TipoInformacaoCartao>

                            <TempoInformacaoCartao>
                                <FontAwesome5 name="clock" size={12} color="#B5B5B5"/> 25min
                            </TempoInformacaoCartao>

                            <BoxButtons>
                                <BoxBotaoLike onPress={() => {navigation.navigate('Perfil'), Alert.alert('Aviso', 'Acesse sua conta para favoritar')}}>
                                    <FontAwesome5 name="heart" size={22} color="#DB9600"/>
                                </BoxBotaoLike>
                                <BoxBotaoShare  onPress={() => {navigation.navigate('Perfil'), Alert.alert('Aviso', 'Acesse sua conta para poder compartilhar')}}>
                                    <FontAwesome5 name="code-branch" size={22} color="#DB9600"/>
                                </BoxBotaoShare>
                            </BoxButtons>
                        
                        </InformacaoCartao>
                        
                    </Cartao>
                </ListReceitasAgrado>
        </Container>
    )
}
