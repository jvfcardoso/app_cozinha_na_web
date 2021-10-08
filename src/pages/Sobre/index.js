import React from 'react';
import {
    Container,
    Logo,
    BoxLogo
 } from './styles';

export default function Sobre(){
    return(
        <Container >
            <BoxLogo>
                <Logo
                    resizeMode="stretch"
                    source={require('../../../assets/imagens/logo.png')}
                />
            </BoxLogo>
        </Container>
    )
}
