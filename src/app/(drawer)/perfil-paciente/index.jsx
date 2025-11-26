import React from "react";
import {
  Barra,
  Card,
  ContainerPerfil,
  Ficha,
  Icons,
  ImagemPerfil,
  Info,
  InfoCadastro,
  PerfilPaciente,
  StatusPerfil,
  TextoInfo,
  TextoPerfil,
} from "../../../styles/perfilpaciente";
import styled from "styled-components";
import { BlurView } from 'expo-blur';
import Header from "../../../components/header/Header";

export default function Paciente() {
  const Content = styled(BlurView).attrs({
    intensity: 100,
    tint: "light",
  })`
    display: flex;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.5); 
    overflow: hidden;
    width: 100%;
    height: 80px;
    flex-direction: row;
   padding: 10px 0;
  `;

  return (
    <PerfilPaciente>
      <Header/>
      <ContainerPerfil>
        <ImagemPerfil source={require("../../../assets/images/perfilicon.png")} />

        <Info>
          <TextoPerfil>João Lucas Vega</TextoPerfil>
          <StatusPerfil>Em Acompanhamento</StatusPerfil>
        </Info>
      </ContainerPerfil>

      <InfoCadastro>
        
        <Content>
            <TextoInfo>Informações de cadastro</TextoInfo>
            <Card>
                <Icons source={require("../../../assets/images/visualizeicon.png")} />
                <Icons source={require("../../../assets/images/editicon.png")} />

            </Card>
        </Content>
      </InfoCadastro>

      <InfoCadastro>
        <Content>
           <Ficha>
            <TextoInfo>Ficha de anamnese</TextoInfo> 
           <Barra source={require("../../../assets/images/barraprocesso.png")}/>
           </Ficha>
           <Card>
            <Icons source={require("../../../assets/images/visualizeicon.png")} />
                <Icons source={require("../../../assets/images/editicon.png")} />
           </Card>
        </Content>
      </InfoCadastro>
    </PerfilPaciente>
  );
}
