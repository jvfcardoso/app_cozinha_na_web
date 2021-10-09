import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    flex: 1;
    background-color: #FCFCFC;
`;

export const Titulo = styled.Text`
    font-size: 25px;
    font-weight: bold;
`;

export const Logo = styled.Image`
    width: 90px;
    height: 90px;
    `;

export const BoxLogo = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: 20px;
    margin-right: 30px;
`;

export const BoxBanner = styled.View`
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

export const Banner = styled.Image`
    width: 90%;
    height: 100px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
`;

export const BoxQuemSomos = styled.View`
    margin-top: 20px;
    background-color: #FCF3C2;
    width: 90%;
    padding: 5px;
    padding-bottom: 20px;
    align-items: center;
    border-radius: 8px;
`;

export const TextQuemSomos = styled.Text`
    text-align: justify;
    width: 90%;

`;

export const BoxComo = styled.View`
    margin-top: 20px;
    background-color: #FCF3C2;
    width: 90%;
    padding: 5px;
    align-items: center;
    border-radius: 8px;
    padding-bottom: 20px;
`;

export const TextComo = styled.Text`
    text-align: justify;
    width: 90%;
`;

export const BoxSobre = styled.View`

`;

export const TextSobre = styled.Text`
    font-size: 20px;
    font-weight: bold;
`;