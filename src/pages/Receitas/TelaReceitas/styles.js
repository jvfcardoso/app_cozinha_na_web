import styled from "styled-components";

export const Container = styled.View`
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

export const ButtonHome = styled.TouchableOpacity`

`;

export const TextButton = styled.Text`
    font-size: 20px;
    font-weight: bold;

`;

export const ScrollReceita = styled.ScrollView`

`;

export const TituloReceita = styled.Text`
    font-size: 25px;
    font-weight: bold;
    margin-left: 20px;
`;

export const BannerReceita = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`;

export const Banner = styled.Image`
    width: 95%;
    height: 200px;
    border-radius: 5px;
    
`;

export const BoxExemplos = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 10px;
`;

export const ImagensExemplos = styled.Image`
    width: 120px;
    height: 80px;
    border-radius: 10px;
`;

export const BoxImagemExemplos = styled.TouchableOpacity`

`;