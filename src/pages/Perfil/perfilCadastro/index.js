import React from 'react';
import {Alert} from 'react-native';
import {
    Container,
    Logo,
    BoxInput,
    BotaoCadastro,
    Input,
    TextoBotao,
    BoxTelSenha
 } from './styles';

 export default function Perfil(){
    return(
        <Container>
                <Logo
                    source={require('../../../../assets/imagens/logo.png')}
                    />
            <BoxInput>
                <Input
                    placeholder="Nome"
                    autoCorrect={false}
                    autoCapitalize="words"
                    maxLength={50}
                    />
                <Input
                    placeholder="E-mail"
                    autoCorrect={false}
                    maxLength={50}
                    autoCapitalize="none"
                    />
                <BoxTelSenha>
                    <Input
                        placeholder="Telefone"
                        maxLength={11}
                        keyboardType='numeric'
                        style={{
                            width: 145,
                            marginRight: 20,
                            padding: 5,
                            
                        }}
                        />
                    <Input
                        placeholder="Senha"
                        autoCorrect={false}
                        autoCapitalize="none"
                        maxLength={50}
                        secureTextEntry={true}
                        style={{
                            width: 185,
                            padding: 5,
                        }}
                        />
                </BoxTelSenha>

                <BotaoCadastro activeOpacity={0.7} onPress={() => Alert.alert('Aviso', 'Funcionalidade em Desenvolvimento!')}>
                    <TextoBotao>
                        Cadastrar
                    </TextoBotao>
                </BotaoCadastro>

            </BoxInput>
        </Container>
    )
}
