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
    CartaoReceitas,
    ButtonIcon,
 } from './styles';
import {Alert} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
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
                        source={require('../../../assets/imagens/banners/bannerHome.jpg')}
                    />
                </BoxBanner>

                    <TitleTipoReceitas>
                        Tipos de Receitas
                    </TitleTipoReceitas>
                
                <ListTipoReceitas horizontal={true} showsHorizontalScrollIndicator={false}>
                        <CartaoReceitas>
                            <Legendas>Hambúrgueres</Legendas>
                                <FoodsTipoReceitas
                                        source={require('../../../assets/imagens/foods/xcheese.png')}
                                />
                                <ButtonIcon activeOpacity={0.8} onPress={() => navigation.navigate('Receitas')}>
                                    <Ionicons name="arrow-redo-outline" size={30} color="#DB9600" />
                                </ButtonIcon>
                        </CartaoReceitas>

                        <CartaoReceitas>
                            <Legendas>Massas</Legendas>
                                <FoodsTipoReceitas
                                        source={require('../../../assets/imagens/foods/massas.png')}
                                />
                                <ButtonIcon activeOpacity={0.8} onPress={() => navigation.navigate('Receitas')}>
                                    <Ionicons name="arrow-redo-outline" size={30} color="#DB9600" />
                                </ButtonIcon>
                        </CartaoReceitas>

                        <CartaoReceitas>
                            <Legendas>Bebidas</Legendas>
                                <FoodsTipoReceitas
                                        source={require('../../../assets/imagens/foods/bebidas.png')}
                                />
                                <ButtonIcon activeOpacity={0.8} onPress={() => navigation.navigate('Receitas')}>
                                    <Ionicons name="arrow-redo-outline" size={30} color="#DB9600" />
                                </ButtonIcon>
                        </CartaoReceitas>

                        <CartaoReceitas>
                            <Legendas>Sorvetes</Legendas>
                                <FoodsTipoReceitas
                                        source={require('../../../assets/imagens/foods/sorvete.png')}
                                />
                                <ButtonIcon activeOpacity={0.8} onPress={() => navigation.navigate('Receitas')}>
                                    <Ionicons name="arrow-redo-outline" size={30} color="#DB9600" />
                                </ButtonIcon>
                        </CartaoReceitas>

                        <CartaoReceitas>
                            <Legendas>Sobremesas</Legendas>
                                <FoodsTipoReceitas
                                        source={require('../../../assets/imagens/foods/bolo.png')}
                                />
                                <ButtonIcon activeOpacity={0.8} onPress={() => navigation.navigate('Receitas')}>
                                    <Ionicons name="arrow-redo-outline" size={30} color="#DB9600" />
                                </ButtonIcon>
                        </CartaoReceitas>
                </ListTipoReceitas>

                <TitleReceitasAgrado>
                    Receitas do seu agrado
                </TitleReceitasAgrado>

                <ListReceitasAgrado  horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Cartao activeOpacity={0.9}>
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
                                <BoxBotaoLike activeOpacity={0.8} onPress={() => {navigation.navigate('Perfil'), Alert.alert('Aviso', 'Acesse sua conta para favoritar')}}>
                                    <FontAwesome5 name="heart" size={22} color="#DB9600"/>
                                </BoxBotaoLike>
                                <BoxBotaoShare activeOpacity={0.8} onPress={() => {navigation.navigate('Perfil'), Alert.alert('Aviso', 'Acesse sua conta para poder compartilhar')}}>
                                    <FontAwesome5 name="code-branch" size={22} color="#DB9600"/>
                                </BoxBotaoShare>
                            </BoxButtons>
                        
                        </InformacaoCartao>
                    </Cartao>
                    <Cartao activeOpacity={0.9}>
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
                                <BoxBotaoLike activeOpacity={0.8} onPress={() => {navigation.navigate('Perfil'), Alert.alert('Aviso', 'Acesse sua conta para favoritar')}}>
                                    <FontAwesome5 name="heart" size={22} color="#DB9600"/>
                                </BoxBotaoLike>
                                <BoxBotaoShare activeOpacity={0.8} onPress={() => {navigation.navigate('Perfil'), Alert.alert('Aviso', 'Acesse sua conta para poder compartilhar')}}>
                                    <FontAwesome5 name="code-branch" size={22} color="#DB9600"/>
                                </BoxBotaoShare>
                            </BoxButtons>
                        
                        </InformacaoCartao>
                        
                    </Cartao>
                    <Cartao activeOpacity={0.9}>
                        <FoodsReceitasAgrado
                            resizeMode="contain"
                            source={require('../../../assets/imagens/foods/frango.jpg')}
                        />

                        <InformacaoCartao>
                            <TituloInformacaoCartao>
                                Frango a passarinho
                            </TituloInformacaoCartao>

                            <TipoInformacaoCartao>
                                Assados
                            </TipoInformacaoCartao>

                            <TempoInformacaoCartao>
                                <FontAwesome5 name="clock" size={12} color="#B5B5B5"/> 30min
                            </TempoInformacaoCartao>

                            <BoxButtons>
                                <BoxBotaoLike activeOpacity={0.8} onPress={() => {navigation.navigate('Perfil'), Alert.alert('Aviso', 'Acesse sua conta para favoritar')}}>
                                    <FontAwesome5 name="heart" size={22} color="#DB9600"/>
                                </BoxBotaoLike>
                                <BoxBotaoShare activeOpacity={0.8} onPress={() => {navigation.navigate('Perfil'), Alert.alert('Aviso', 'Acesse sua conta para poder compartilhar')}}>
                                    <FontAwesome5 name="code-branch" size={22} color="#DB9600"/>
                                </BoxBotaoShare>
                            </BoxButtons>
                        
                        </InformacaoCartao>
                        
                    </Cartao>
                </ListReceitasAgrado>
        </Container>
    )
}
