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
        <Container showsVerticalScrollIndicator={false}>
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
                    resizeMode="cover"
                    source={require('../../../assets/imagens/banners/bannerSobre.jpg')}
                />
            </BoxBanner>
            
            <BoxQuemSomos>
                <Titulo>Quem somos</Titulo>
                <TextQuemSomos>
                    O projeto Cozinha na Web propõe auxiliar
                    todas as pessoas que têm interesse pelo meio
                    culinário, seja para aprender os primeiros
                    passos na confecção de pratos ou para
                    aprimorar as habilidades e conhecimentos
                    gastronômicos pré existentes Contando com
                    o suporte de chefs experientes e dicas e
                    explicações de cozinheiros da própria
                    comunidade, qualquer um poderá preparar
                    uma boa receita para si mesmo ou para as
                    pessoas que ama. Pensado para ser
                    dinâmico, intuitivo e flexível, o aplicativo contará
                    com conteúdo bem estruturado e acessível,
                    oferecendo a melhor experiência possível
                    para você desenvolver suas habilidades e
                    surpreender até mesmo os paladares mais
                    exigentes.
                </TextQuemSomos>
            </BoxQuemSomos>

            <BoxComo>
                <Titulo>Como</Titulo>
                <TextComo>
                    O objetivo geral do projeto é auxiliar pessoas
                    com os mais diversos níveis de habilidade na
                    cozinha, a preparar refeições saborosas e
                    nutritivas, para si ou para outras pessoas,
                    oferecendo dicas e sugerindo ingredientes
                    para a confecção dos pratos. De acordo com
                    o nível de habilidade do usuário, identificado
                    previamente, serão sugeridas opções de
                    receitas mais adequadas ao seu perfil. Haverá
                    a opção de escolha de uma receita, com base
                    nos ingredientes que a pessoa tem em casa,
                    algo inovador no mercado brasileiro.
                </TextComo>
            </BoxComo>

        </Container>
    )
}
