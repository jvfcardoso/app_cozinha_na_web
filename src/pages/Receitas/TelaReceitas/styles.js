import styled from "styled-components";

export const Container = styled.View`
    flex: 1;
    background-color: #F5F1F1;
`;

export const Logo = styled.Image`
    width: 90px;
    height: 90px;
    
`;

export const ViewReceitas = styled.View`

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


export const TituloReceita = styled.Text`
    font-size: 25px;
    font-weight: bold;
    margin-left: 20px;
`;

export const TituloIngredientes = styled.Text`
    font-size: 25px;
    font-weight: bold;
    margin-left: 20px;
`;

export const BoxIngredientes = styled.View`
    width: 90%;
    padding: 10px;
    margin: 10px 0 15px 20px;
    border-width: 1px;
    border-top-left-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color: #FCF3C2;
    `;

export const ListaIngredientes = styled.Text`
    font-size: 15px;
    `;

export const BannerReceita = styled.ScrollView`
    margin: 10px;
    `;

export const Banner = styled.Image`
    width: 350px;
    height: 250px;
    margin: 10px 5px 10px 5px;
    border-radius: 5px;
    `;


export const TituloModoPreparo = styled.Text`
    font-size: 25px;
    font-weight: bold;
    margin-left: 20px;
    `;

export const BoxModoPreparo = styled.View`
    margin: 10px 0 30px 20px;
    border-width: 1px;
    border-top-left-radius: 15px;
    border-bottom-right-radius: 15px;
    padding: 10px;
    width: 90%;
    background-color: #FCF3C2;
`;

export const ModoPreparo = styled.Text`
    font-size: 15px;
`;
