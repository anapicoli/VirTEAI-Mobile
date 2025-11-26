import styled from "styled-components/native";

export const CadastroContainer = styled.View`
    display: flex;
    background-color: white;
    align-items: center;
    flex: 1;
`

export const ContainerCad = styled.View`
    background-color: #9CB4D3;
    width: 165px;
    height: 50px;
    margin-top: 108px;
    border-radius: 20px;
    z-index: 1;
    elevation: 2;

`
export const TextoCadastro = styled.Text`
    font-size: 30px;
    color: #000000ff;
    text-align: center;
    font-family: "MarmeladRegular";

`
export const ContainerCadastros = styled.View`
    background-color: #9CB4D3;
    width: 311px;
    /* Altura flexível para evitar quebra quando mensagens de erro aparecem */
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    margin-top: -23px;
    padding: 16px 0 20px 0;
`