import React from "react";
import {
  Card,
  ContainerPerfil,
  CRP,
  Ficha,
  Icons,
  ImagemPerfil,
  Info,
  InfoCadastro,
  PerfilTerapeuta,
  StatusPerfil,
  TextoInfo,
  TextoPerfil,
} from "../../../styles/perfilterapeuta";
import styled from "styled-components";
import { BlurView } from 'expo-blur';
import Header from "../../../components/header/Header";

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
      <Header/>

      <ContainerPerfil>
        <ImagemPerfil source={require("../../../assets/images/perfilicon.png")} />

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
                <Icons source={require("../../../assets/images/visualizeicon.png")} />
                <Icons source={require("../../../assets/images/editicon.png")} />

            </Card>
        </Content>
      </InfoCadastro>

      <InfoCadastro>
        <Content>
           <Ficha>
            <TextoInfo>Ficha e formulários</TextoInfo> 
           </Ficha>
           <Card>
            <Icons source={require("../../../assets/images/visualizeicon.png")} />

           </Card>
        </Content>
      </InfoCadastro>
    </PerfilTerapeuta>
  );
}
