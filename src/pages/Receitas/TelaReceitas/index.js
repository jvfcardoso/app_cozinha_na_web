import React from 'react';
import {
    Container,
    BoxLogo,
    Logo,
    ButtonHome,
    TextButton,
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
} from './styles';
import { Ionicons } from '@expo/vector-icons';
import { FlatList } from 'react-native';
import {Info} from './InfoReceitas';

export default function TelaReceitas({navigation}){
    return(
            <Container>
                <BoxLogo>
                    <Logo source={require('../../../../assets/imagens/logo.png')}/>
                    <ButtonHome 
                        onPress={() => navigation.navigate('Receitas')}
                        activeOpacity={0.8}    
                    >
                        <TextButton>
                            <Ionicons name="arrow-undo" size={24} color="black" /> Voltar</TextButton>    
                    </ButtonHome>        
                </BoxLogo>

                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={Info}
                    keyExtractor={(item) => {item.uid}}
                    renderItem={({item}) => (
                    <ViewReceitas>
                        <TituloReceita>
                            {item.nomeReceita}
                        </TituloReceita>
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




            </Container>

    )
}
