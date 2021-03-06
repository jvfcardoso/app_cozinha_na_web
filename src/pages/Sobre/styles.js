import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    flex: 1;
    background-color: #F5F1F1;
    
`;

export const Titulo = styled.Text`
    font-size: 25px;
    font-weight: bold;
    text-align: left;
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

`;

export const BoxQuemSomos = styled.View`
    width: 90%;
    background-color: #FBF6E3;
    padding-bottom: 10px;
    margin-top: 20px;
    border-radius: 8px;
    padding: 15px;
    elevation: 8;
    align-self: center;
`;

export const TextQuemSomos = styled.Text`
    text-align: justify;
    font-size: 15px;
`;

export const BoxComo = styled.View`
    margin-top: 20px;
    background-color: #FBF6E3;
    width: 90%;
    padding: 15px;
    border-radius: 8px;
    padding-bottom: 10px;
    margin-bottom: 30px;
    elevation: 8;
    align-self: center;
`;

export const TextComo = styled.Text`
    text-align: justify;
    font-size: 15px;
`;

export const BoxSobre = styled.View`

`;

export const TextSobre = styled.Text`
    font-size: 22px;
    font-weight: bold;
`;