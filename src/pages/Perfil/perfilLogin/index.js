import React from 'react';
import {
    Text
 } from 'react-native';
import {
    Container,
    Logo,
    BoxInput,
    BotaoLogin,
    BotaoCadastro,
    Input,
    TextoBotao,
 } from './styles';

export default function Perfil(){
    return(
        <Container>
                <Logo
                    source={require('../../../../assets/imagens/logo.png')}
                />
            <BoxInput>
                <Input
                    placeholder="E-mail"
                    autoCorrect={false}
                    onChangeText={() => {}}
                />
                <Input
                    placeholder="Senha"
                    autoCorrect={false}
                    onChangeText={() => {}}
                />

                <BotaoLogin activeOpacity={0.7}>
                    <TextoBotao>
                        Entrar
                    </TextoBotao>
                </BotaoLogin>

                <BotaoCadastro activeOpacity={0.7}>
                    <Text>
                        Criar conta gratuita
                    </Text>
                </BotaoCadastro>    

            </BoxInput>
        </Container>
    )
}
