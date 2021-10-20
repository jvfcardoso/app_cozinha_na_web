import React from 'react';
import {
    Text,
    Alert
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
 import {TelaLogin} from '../../../../components/CustomNavigator';

export default function Perfil({navigation}){
    return(
        <Container>
                <Logo
                    source={require('../../../../assets/imagens/logo.png')}
                />
            <BoxInput>
                <Input
                    placeholder="E-mail"
                    autoCorrect={false}
                    autoCapitalize="none"
                />
                <Input
                    placeholder="Senha"
                    autoCorrect={false}
                    autoCapitalize="none"
                    maxLength={20}
                    secureTextEntry={true}
                />

                <BotaoLogin activeOpacity={0.7} onPress={() => Alert.alert('Aviso', 'Funcionalidade em Desenvolvimento!')}>
                    <TextoBotao>
                        Entrar
                    </TextoBotao>
                </BotaoLogin>

                <BotaoCadastro activeOpacity={0.7} onPress={() => navigation.navigate('Cadastro')}>
                    <Text>
                        Criar conta gratuita
                    </Text>
                </BotaoCadastro>    

            </BoxInput>
        </Container>
    )
}
