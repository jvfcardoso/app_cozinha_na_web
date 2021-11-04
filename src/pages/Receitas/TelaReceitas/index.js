import React from 'react';
import {
    Container,
    BoxLogo,
    Logo,
    ButtonHome,
    TextButton,
    ScrollReceita,
    TituloReceita,
    BannerReceita,
    Banner,
    BoxExemplos,
    ImagensExemplos,
    BoxImagemExemplos,
} from './styles';
import { Ionicons } from '@expo/vector-icons';

export default function TelaReceitas({navigation}){
    return(
            <Container>
                <BoxLogo>
                    <Logo source={require('../../../../assets/imagens/logo.png')}/>
                    <ButtonHome onPress={() => navigation.navigate('Receitas')}>
                        <TextButton>
                            <Ionicons name="arrow-undo" size={24} color="black" /> Voltar</TextButton>    
                    </ButtonHome>        
                </BoxLogo>

            <ScrollReceita>
                <TituloReceita>Pizza de Mussarela</TituloReceita>
                    <BannerReceita>
                        <Banner
                            source={require('../../../../assets/imagens/receitas/pizzaMussarela/passo4.jpg')}
                            resizeMode="stretch"
                        />
                    </BannerReceita>
                <BoxExemplos>
                    <BoxImagemExemplos activeOpacity={0.9}>
                        <ImagensExemplos
                            source={require('../../../../assets/imagens/receitas/pizzaMussarela/passo1.jpg')}
                            resizeMode="stretch"
                        />
                    </BoxImagemExemplos>
                    <BoxImagemExemplos activeOpacity={0.9}>
                        <ImagensExemplos
                            source={require('../../../../assets/imagens/receitas/pizzaMussarela/passo2.jpg')}
                            resizeMode="stretch"
                        />
                    </BoxImagemExemplos>
                    <BoxImagemExemplos activeOpacity={0.9}>
                        <ImagensExemplos
                            source={require('../../../../assets/imagens/receitas/pizzaMussarela/passo3.jpg')}
                            resizeMode="stretch"
                        />
                    </BoxImagemExemplos>
                </BoxExemplos>


            </ScrollReceita>

            </Container>

    )
}