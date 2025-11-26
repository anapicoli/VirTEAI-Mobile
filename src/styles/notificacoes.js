import styled from "styled-components/native";

export const NotificacoesContainer = styled.View`
    flex: 1;
    background-color:rgb(252, 252, 252);
`;


export const TituloNotificacoes = styled.Text`
    font-size: 26px;
    margin: 30px;
    font-family: "MarmeladRegular";

`

export const NotificacoesHeader = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const NotificacoesView = styled.View`
    width: 100%;
    height: 105px;
    background-color: #CBEFF2;
    margin-bottom: 20px;
    justify-content: center;
`;

export const NotificacoesViewGrey = styled.View`
    width: 100%;
    height: 105px;
    background-color: #E7E7E7;
    margin-bottom: 20px;
    justify-content: center;
`;

export const TextoImagem = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const ImagemNotificacao = styled.Image`
    margin-left: 50px;
`;

export const TextoMaior = styled.Text`
    font-size: 20px;
    color: #295766;
    margin-left: 25px;
    width: 281px;
    font-family: "ComfortaaBold";
`;

export const TextoMenor = styled.Text`
    font-size: 16px;
    color: #000;
    margin-left: 25px;
    width: 281px;
    font-family: "ComfortaaRegular";
`;
