import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #FCFCFC;
`;

export const BoxLogo = styled.View`
    margin-left: 20px;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 30px;
    align-items: center;
    margin-bottom: 15px;
`;

export const Logo = styled.Image`
    width: 90px;
    height: 90px;
`;

export const ButtonReceitas = styled.View`

`;

export const TextButton = styled.Text`
    font-weight: bold;
    font-size: 20px;
`;


export const Titulo = styled.Text`
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 15px;
`;

export const CartaoCategoria = styled.TouchableOpacity`
    background-color: #FAB111;
    height: 30px;
    width: 110px;
    border-radius: 8px;
    padding: 5px;
    align-items: center;
    justify-content: space-between;
    margin-right: 5px;
    margin-left: 5px;
`;

export const TextCartao = styled.Text`

`;

export const BoxInput = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-right: 20px;
    margin-bottom: 10px;
`;

export const Pesquisar = styled.TextInput`
    margin-left: 10px;
    padding-left: 5px;
    border-width: 1px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 30px;
`;

export const IconePesquisar = styled.TouchableOpacity`

`;

export const BoxReceitas = styled.TouchableOpacity`
    background-color: #FAB111;
    width: 90%;
    height: 150px;
    align-self:flex-end;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    margin-top: 15px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    padding-right: 30px;
`;

export const ImagemReceita = styled.Image`
    width: 125px;
    height: 125px;
    border-radius: 15px;
`;

export const BoxImagemReceita = styled.View`

`;

export const BoxTextInfo = styled.View`

`;

export const TextInfo = styled.Text`
    font-size: 15px;
    font-weight: bold;
`;

export const BoxCategorias = styled.View`
    margin-right: 10px;
    margin-left: 10px;
`;

export const PaginaReceitas = styled.ScrollView`

`;