import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #F5F1F1;
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
    font-size: 22px;
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
    width: 140px;
    border-radius: 8px;
    align-items: center;
    margin-right: 5px;
    margin-left: 5px;
    padding: 5px;
    flex-direction: row;
    justify-content: center;
`;

export const TextCartao = styled.Text`
    align-items: center;
    justify-content: center;
`;

export const BoxReceitas = styled.TouchableOpacity`
    background-color: #FAB111;
    width: 90%;
    height: 150px;
    align-self:flex-end;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    margin: 5px 0 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    padding-right: 30px;
    elevation: 8;
`;

export const ImagemReceita = styled.Image`
    width: 125px;
    height: 125px;
    border-radius: 15px;
`;

export const BoxImagemReceita = styled.View`

`;

export const BoxTextInfo = styled.View`
    width: 230px;
    padding: 0 30px 0 20px;
    
`;

export const TextInfo = styled.Text`
    text-align: left;
    font-size: 12px;
    margin-bottom: 2px;
`;

export const TitleInfo = styled.Text`
    font-weight: bold;
    font-size: 15px;
    margin-bottom: 5px;
`;

export const BoxCategorias = styled.View`
    margin: 0 10px 10px 10px;

`;

export const Categorias = styled.ScrollView`

`;

export const PaginaReceitas = styled.ScrollView`

`;

export const BotaoFavorito = styled.TouchableOpacity`
    width: 35px;
    height: 35px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
`;

export const BoxPesquisar = styled.View`
    margin: 0px 15px;
`;

export const Pesquisar = styled.TextInput`
    width: 100%;
    background-color: #F2F2F270;
    padding: 5px 10px;
    border-radius: 20px;
    border-width: 1px;
`;

export const BoxRadios = styled.View`
    margin: 0 10px 10px 10px;
    flex-direction: row;
    align-items: center;
`;

export const TextRadio = styled.Text`

`;

