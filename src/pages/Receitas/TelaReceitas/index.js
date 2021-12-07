import React from 'react';
import {
    Container,
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
import { FlatList } from 'react-native';
import {Info} from './InfoReceitas';

export default function TelaReceitas({navigation}){
    return(
            <Container>
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
