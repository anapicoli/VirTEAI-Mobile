import React from "react";
import {
    Barra,
  BoxPerfis,
  Card,
  ContainerPerfil,
  ContainerPerfis,
  CRP,
  EscolhaCad,
  Ficha,
  Icons,
  ImagemPerfil,
  Info,
  InfoCadastro,
  Logo,
  Menu,
  Navegacao,
  PerfilPaciente,
  PerfilTerapeuta,
  PerfisContainer,
  StatusPerfil,
  Subtextocad,
  SubtextoPerfil,
  TextoInfo,
  TextoPerfil,
} from "./styles";
import styled from "styled-components";
import { BlurView } from 'expo-blur';

export default function Terapeuta() {
  const Content = styled(BlurView).attrs({
    intensity: 100,
    tint: "light",
  })`
    display: flex;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.5); 
    overflow: hidden;
    elevation: 5;
    width: 100%;
    height: 80px;
    flex-direction: row;
   padding: 10px 0px;
  `;

  return (
    <PerfilTerapeuta>
      <Navegacao>
        <Logo source={require("../../assets/images/virteailogo.png")} />
        <Menu source={require("../../assets/images/voltarmobile.png")} />
      </Navegacao>

      <ContainerPerfil>
        <ImagemPerfil source={require("../../assets/images/perfilicon.png")} />

        <Info>
          <TextoPerfil>Ariella Botazzi</TextoPerfil>
          <CRP>CRP 00/00000</CRP>
          <StatusPerfil>Terapeuta Cognitvo-comportamental</StatusPerfil>
        </Info>
      </ContainerPerfil>

      <InfoCadastro>
        
        <Content>
            <TextoInfo>Informações de cadastro</TextoInfo>
            <Card>
                <Icons source={require("../../assets/images/visualizeicon.png")} />
                <Icons source={require("../../assets/images/editicon.png")} />

            </Card>
        </Content>
      </InfoCadastro>

      <InfoCadastro>
        <Content>
           <Ficha>
            <TextoInfo>Ficha e formulários</TextoInfo> 
           </Ficha>
           <Card>
            <Icons source={require("../../assets/images/visualizeicon.png")} />

           </Card>
        </Content>
      </InfoCadastro>
    </PerfilTerapeuta>
  );
}
