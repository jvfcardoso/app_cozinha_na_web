import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    flex: 1;
    background-color: #F5F4DC;
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
    margin-right: 15px;
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
    height: 150px;
    margin-bottom: -30px;
`;

export const ButtonIcon = styled.TouchableOpacity`
    align-self: flex-end;
    margin: 0 25px 10px;
`;

export const Cartao = styled.TouchableOpacity`
    width: 220px;
    background-color: #f4f4f4;
    margin: 15px 0px 15px 15px;
    align-items: center;
    border-radius: 10px;
    elevation: 8;
    padding-bottom: 20px;   
`;

export const CartaoReceitas = styled.View`
    width: 220px;
    background-color: #f4f4f4;
    margin: 15px 0px 15px 15px;
    align-items: center;
    border-radius: 10px;
    elevation: 8;
`;

export const InformacaoCartao = styled.View`
    width: 100%;
    padding: 20px;
`;

export const TituloInformacaoCartao = styled.Text`
    max-width: 170px;
    margin: 0 0 5px 0;
    font-size: 22px;
    font-weight: bold;
    color: #DB9600;
`;

export const TipoInformacaoCartao = styled.Text`
    font-size: 13px;
    margin: 0 0 10px 0;
    color: #00000080;
`;

export const TempoInformacaoCartao = styled.Text`
    font-size: 11px;
    color: #00000070;
`;

export const Legendas = styled.Text`
    margin: 15px 0 5px 20px;
    align-self: flex-start;
    font-weight: bold;
    font-size: 20px;
    color: #DB9600;
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
    margin-right: 15px;
`;

export const FoodsReceitasAgrado = styled.Image`
    width: 100%;
    height: 145px;
    border-radius: 10px;
`;

export const BoxButtons = styled.View`
    flex-direction: row;
    margin-top: 15px;
    
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
    margin-right: 20px;
`;