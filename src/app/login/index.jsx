import React from "react";
import { Button, ContainerInput, ContainerLog, ContainerLogins,  Contalogin,  InputLogin, LoginContainer, Logo, Menu, Navegacao, TextButton, TextoInput, TextoLogin } from "./styles";
import {TouchableOpacity} from "react-native";

import { useRouter } from "expo-router";

const router = useRouter();


export default function Login() {
    return (
        <LoginContainer>
            <Navegacao>
                <Logo source={require('../../assets/images/virteailogo.png')}/>
                <TouchableOpacity onPress={() => router.push("/")}>
                    <Menu source={require('../../assets/images/voltarmobile.png')}/>
                </TouchableOpacity>
            </Navegacao>
            <ContainerLog>
                <TextoLogin>Login</TextoLogin>
            </ContainerLog>
            <ContainerLogins>
                <ContainerInput>
                    <TextoInput>Email:</TextoInput>
                    <InputLogin>Insira seu email</InputLogin>
                </ContainerInput>
                <ContainerInput>
                    <TextoInput>Senha:</TextoInput>
                    <InputLogin>Insira sua senha</InputLogin>
                </ContainerInput>
                <Contalogin>Não tenho cadastro</Contalogin>
                <Button>
                    <TextButton>Entrar</TextButton>
                </Button>
            </ContainerLogins>
        </LoginContainer>
    )
}
