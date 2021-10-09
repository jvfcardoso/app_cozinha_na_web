import React from 'react';
import {
    Container,
    Logo,
    BoxLogo,
    Banner,
    BoxBanner,
    BoxQuemSomos,
    TextQuemSomos,
    Titulo,
    BoxComo,
    TextComo,
    BoxSobre,
    TextSobre,

 } from './styles';

export default function Sobre(){
    return(
        <Container >
            <BoxLogo>
                <Logo
                    resizeMode="stretch"
                    source={require('../../../assets/imagens/logo.png')}
                />

                <BoxSobre>
                    <TextSobre>
                        Sobre
                    </TextSobre>
                </BoxSobre>
            </BoxLogo>

            <BoxBanner>
                <Banner
                    source={require('../../../assets/imagens/bannerSobre.jpg')}
                />

            <BoxQuemSomos>
                <Titulo>Quem somos</Titulo>
                <TextQuemSomos>
                    Uma equipe disposta a ajudar aqueles que pouco sabem cozinhar
                    e também para aqueles que pretendem aprimorar seus conhecimentos
                    culinários.
                </TextQuemSomos>

            </BoxQuemSomos>

            <BoxComo>
                <Titulo>Como</Titulo>
                <TextComo>
                    Usando um site como inspiração (nome do site) nos inspiraremos em um método
                    onde você coloca qualquer tipo de alimento que tenha em casa e em seguida o 
                    site indica possibilidades de receitas para fazer com tais ingredientes.
                    Haverá um suporte técnico totalmente gratuito de mestres e também amadores que
                    vão prestar o suporte necessário.
                    O site também irá conter informações nutricionais de cada tipo de alimento,
                    dizendo as calorias, carboidratos, proteínas, sódio entre outros.
                </TextComo>
            </BoxComo>
            </BoxBanner>

        </Container>
    )
}
