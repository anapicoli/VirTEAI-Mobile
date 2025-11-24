import React from "react";
import { Button, CadastroContainer, ContainerCad, ContainerCadastros, ContainerInput, InputCadastro, Logo, Menu, Navegacao, TextButton, TextoCadastro, TextoInput } from "./styles";


export default function Cadastro() {
    return (
        <CadastroContainer>
            <Navegacao>
                <Logo source={require('../../assets/images/virteailogo.png')}/>
                <Menu source={require('../../assets/images/voltarmobile.png')}/>
            </Navegacao>
            <ContainerCad>
                <TextoCadastro>Cadastro</TextoCadastro>
            </ContainerCad>
            <ContainerCadastros>
                <ContainerInput>
                    <TextoInput>Nome:</TextoInput>
                    <InputCadastro>Insira seu nome completo</InputCadastro>
                </ContainerInput>
                
                <ContainerInput>
                    <TextoInput>Email:</TextoInput>
                    <InputCadastro>Insira seu email</InputCadastro>
                </ContainerInput>
                <ContainerInput>
                    <TextoInput>Senha:</TextoInput>
                    <InputCadastro>defina a sua senha</InputCadastro>
                </ContainerInput>
                <Button>
                    <TextButton>Enviar</TextButton>
                </Button>
            </ContainerCadastros>
            
            
        </CadastroContainer>
    )
}
