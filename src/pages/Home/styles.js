import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    flex: 1;
    background-color: #FCFCFC;
`;


export const Logo = styled.Image`
    width: 90px;
    height: 90px;
    
`;

export const BoxLogo = styled.View`
    margin-left: 20px;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 30px;
    align-items: center;
    margin-bottom: 15px;
`;

export const ButtonHome = styled.View`

`;

export const TextButton = styled.Text`
    font-size: 20px;
    font-weight: bold;

`;

export const ListTipoReceitas = styled.ScrollView`
    
`;

export const TitleTipoReceitas = styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin-left: 15px;
    margin-bottom: 10px;
    margin-top: 20px;
`;

export const FoodsTipoReceitas = styled.Image`
    width: 150px;
    height: 175px;
`;

export const Cartao = styled.View`
    width: 170px;
    height: 185px;
    background-color: #FCF3C2;
    margin-left: 15px;
    align-items: center;
    border-radius: 10px;
    
`;

export const Legendas = styled.Text`
    font-size: 15px;
    margin-top: -35px;
`;

export const TitleReceitasAgrado = styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin-left: 15px;
    margin-bottom: 10px;
    margin-top: 50px;

`;

export const ListReceitasAgrado = styled.ScrollView`
    margin-bottom: 30px;
`;

export const FoodsReceitasAgrado = styled.Image`
    width: 130px;
    height: 145px;
`;

export const BoxButtons = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
`;

export const Banner = styled.Image`
    width: 90%;
    height: 100px;
    border-radius: 10px;
`;

export const BoxBanner = styled.View`
    align-items: center;
    justify-content: center;
`;


export const BoxBotaoShare = styled.TouchableOpacity`

`;

export const BoxBotaoLike = styled.TouchableOpacity`

`;