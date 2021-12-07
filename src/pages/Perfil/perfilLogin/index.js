import React, {useRef} from 'react';
import {
    Text,
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
import { Modalize } from 'react-native-modalize';
import ModalLogin from '../../../../components/modais/modalLogin';

export default function Perfil({navigation}){
const modalizeRef = useRef(null);

function onOpen(){
    modalizeRef.current?.open();
}
    return(
        <Container>
            <Modalize
                ref={modalizeRef}
                snapPoint={200}
                modalHeight={200}
            >
                <ModalLogin/>
            </Modalize>

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

                <BotaoLogin activeOpacity={0.7} onPress={onOpen}>
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
