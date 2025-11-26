import React from "react";
import {  BoxPerfis, ContainerPerfis,  EscolhaCad,  ImagemPerfil,  Logo, Menu, Navegacao, PerfisContainer, Subtextocad, SubtextoPerfil, TextoPerfil } from "../../../styles/perfis";
import Header from "../../../components/header/Header";
import {TouchableOpacity} from "react-native";
import {router} from "expo-router";



export default function Perfis() {
    return (
      <PerfisContainer>
        <Header/>
        <TextoPerfil>Perfis</TextoPerfil>
        <SubtextoPerfil>Selecione abaixo o tipo de perfil que mais se adequa à você</SubtextoPerfil>

        <BoxPerfis>
          <TouchableOpacity onPress={() => router.push('/perfil-paciente')}>
            <EscolhaCad>
              <ImagemPerfil source={require('../../../assets/images/perfilpacienteicon.png')}/>
              <Subtextocad>Paciente</Subtextocad>
            </EscolhaCad>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/perfil-terapeuta')}>
            <EscolhaCad>
              <ImagemPerfil source={require('../../../assets/images/perfilterapeutaicon.png')}/>
              <Subtextocad>Terapeuta</Subtextocad>
            </EscolhaCad>
          </TouchableOpacity>
        </BoxPerfis>
      </PerfisContainer>
    )
}
            