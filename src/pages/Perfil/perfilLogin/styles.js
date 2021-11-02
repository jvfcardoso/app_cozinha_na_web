import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    background-color: #F5F4DC;
    justify-content: center;
    align-items: center;
    padding-top: 120px;
`;

export const Logo = styled.Image`
    width: 120px;
    height: 120px;

`;

export const  BoxInput = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin-top: -60px;
`;

export const BotaoLogin = styled.TouchableOpacity`
    background-color: #fab111;
    width: 100px;
    height: 30px;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    margin-top: 20px;
    `;

export const TextoBotao = styled.Text`
    font-weight: bold;
    color: #FFF;
`;

export const BotaoCadastro = styled.TouchableOpacity`
    margin-top: 15px;
`;

export const Input = styled.TextInput`
    width: 80%;
    margin-bottom: 15px;
    border-bottom-width: 1px;
    border-bottom-color: #121212;
    height: 30px;
    padding: 5px;
    color: #121212;
    
`;
