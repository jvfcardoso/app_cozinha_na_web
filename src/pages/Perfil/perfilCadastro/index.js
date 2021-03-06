import React, {useRef} from 'react';
import {
    Container,
    Logo,
    BoxInput,
    BotaoCadastro,
    Input,
    TextoBotao,
    BoxTelSenha
 } from './styles';
 import {Modalize} from 'react-native-modalize';
 import ModalLogin from '../../../../components/modais/modalLogin';

 export default function Perfil(){
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

                <BotaoCadastro activeOpacity={0.7} onPress={onOpen}>
                    <TextoBotao>
                        Cadastrar
                    </TextoBotao>
                </BotaoCadastro>

            </BoxInput>
        </Container>
    )
}
