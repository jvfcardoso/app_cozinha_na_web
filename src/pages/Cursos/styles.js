import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    flex: 1;
    background-color: #F5F4DC;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-left: 20px;
    margin-right: 30px;
`;

export const Logo = styled.Image`
    width: 90px;
    height: 90px;
`;

export const ButtonCursos  = styled.View`
    align-items: center;
    justify-content: center;

`;

export const TextButtonCursos = styled.Text`
    font-size: 20px;
    font-weight: bold;
`;

export const BoxProposta = styled.View`
    width: 90%;
    background-color: #f4f4f4;
    padding: 15px;
    margin-top: 20px;
    border-radius: 8px;
    margin-left: 25px;
    margin-bottom: 20px;
    elevation: 8;
`;

export const TextoProposta = styled.Text`
    text-align: justify;
`;

export const Titulo = styled.Text`
    font-size: 25px;
    font-weight: bold;
    text-align: left;
    margin-bottom: 10px;
`;

export const CartaoCursos = styled.View`
    width: 350px;
    background-color: #f4f4f4;
    padding: 15px;
    margin-bottom: 30px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    elevation: 8;
`;

export const BoxCursos = styled.ScrollView`
    margin-left: 25px;
`;

export const DescricaoCurso = styled.Text`
    text-align: justify;
`;

export const ImagemCurso = styled.Image`
    width: 100%;
    height: 170px;
    border-radius: 8px;
    margin-bottom: 10px;
`;

export const ButtonSaibaMais = styled.TouchableOpacity`
    background-color: #fab111;
    width: 85px;
    height: 30px;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin-top: 10px;
    align-self: flex-end;
`;

export const TextoButtonSaibaMais = styled.Text`
    font-weight: bold;
`;
