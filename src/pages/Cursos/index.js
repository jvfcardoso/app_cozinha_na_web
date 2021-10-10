import React from 'react';
import {
    Container,
    Header,
    Logo,
    ButtonCursos,
    TextButtonCursos,
    BoxProposta,
    TextoProposta,
    Titulo,
    DescricaoCurso,
    ImagemCurso,
    ButtonSaibaMais,
    TextoButtonSaibaMais,
    CartaoCursos,
    BoxCursos,

 } from './styles';

export default function Cursos(){
    return(
        <Container showsVerticalScrollIndicator={false}>
            <Header>
               <Logo
                    source={require('../../../assets/imagens/logo.png')}
               />
               <ButtonCursos>
                   <TextButtonCursos>Cursos</TextButtonCursos>
               </ButtonCursos>
            </Header>

            <BoxProposta>
                <Titulo>Proposta</Titulo>
                <TextoProposta>
                    Baseado no suporte gratuito, o suporte premium, como o próprio nome diz
                    oferece uma aula premium particular de um chef profissional ensinando a fazer
                    qualquer tipo de receita que você desejar. Além de dicas privilegiadas relacionadas
                    a variados assuntos sobre alimentos e receitas. Proporcionalmente esse serviço é oferecido
                    mediante a um pagamento mensal que varia conforme o pacote contratado. Confira os serviços 
                    oferecidos logo abaixo.
                </TextoProposta>
            </BoxProposta>

            <BoxCursos horizontal={true} showsHorizontalScrollIndicator={false}>
                <CartaoCursos>
                    <Titulo>Iniciante</Titulo>
                        <ImagemCurso
                            resizeMode="stretch"
                            source={require('../../../assets/imagens/cursos/iniciante.jpg')}
                        />
                        <DescricaoCurso>
                        Esse curso é feito especialmente para você que não sabe ao menos ligar o fogão. Aqui você encontrará os conceitos básicos da cozinha, apresentando desde o vocabulário culinário até o preparo do seu primeiro bolo. Tudo isso muito bem explicativo e não se preocupe, nossos profissionais possuem uma linguagem muito simples o que ajudará na solução de dúvidas além de um chat com pessoas reais.
                        </DescricaoCurso>
                        <ButtonSaibaMais activeOpacity={0.7}>
                            <TextoButtonSaibaMais>Saiba Mais</TextoButtonSaibaMais>
                        </ButtonSaibaMais>
                </CartaoCursos>

                <CartaoCursos>
                    <Titulo>Intermediário</Titulo>
                    <ImagemCurso
                            resizeMode="stretch"
                            source={require('../../../assets/imagens/cursos/intermediario.jpg')}
                        />
                    <DescricaoCurso>
                        Quer dizer você já sabe cozinhar, mas mesmo assim deseja saber mais sobre o preparo de novos pratos? Então esse é o curso perfeito , pois aqui ensinaremos as receitas mais famosas de diversos cantos do globo, e ainda contamos com um bate-papo único que contextualiza as raízes culturais dessas iguarias. E claro, sem deixar de lado o suporte em tempo real.
                    </DescricaoCurso>
                    <ButtonSaibaMais activeOpacity={0.7}>
                        <TextoButtonSaibaMais>Saiba Mais</TextoButtonSaibaMais>
                    </ButtonSaibaMais>
                </CartaoCursos>

                <CartaoCursos>
                    <Titulo>Avançado</Titulo>
                    <ImagemCurso
                            resizeMode="stretch"
                            source={require('../../../assets/imagens/cursos/avancado.jpg')}
                        />
                    <DescricaoCurso>
                        Este curso é para você que está cursando ou já cursou um ensino especializado em gastronomia. Aqui você terá um conhecimento empresarial da área, sabendo como abrir seu próprio restaurante. Com a experiência de chefes que já estão no ramo a muito tempo você terá as melhores dicas e possíveis ajudas para abrir o seu negócio.
                    </DescricaoCurso>
                    <ButtonSaibaMais activeOpacity={0.7}>
                        <TextoButtonSaibaMais>Saiba Mais</TextoButtonSaibaMais>
                    </ButtonSaibaMais>
                </CartaoCursos>
            </BoxCursos>

        </Container>
    )
}
