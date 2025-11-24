import React from "react";
import {  BoxPerfis, ContainerPerfis,  EscolhaCad,  ImagemPerfil,  Logo, Menu, Navegacao, PerfisContainer, Subtextocad, SubtextoPerfil, TextoPerfil } from "./styles";


export default function Perfis() {
    return (
        <PerfisContainer>
            <Navegacao>
                <Logo source={require('../../assets/images/virteailogo.png')}/>
                <Menu source={require('../../assets/images/voltarmobile.png')}/>
            </Navegacao>

            <TextoPerfil>Perfis</TextoPerfil>
            <SubtextoPerfil>Selecione abaixo o tipo de perfil que mais se adequa à você</SubtextoPerfil>

            <BoxPerfis>
                <EscolhaCad>
                    <ImagemPerfil source={require('../../assets/images/perfilpacienteicon.png')}/>
                    <Subtextocad>Paciente</Subtextocad>
                </EscolhaCad>
                <EscolhaCad>
                    <ImagemPerfil source={require('../../assets/images/perfilterapeutaicon.png')}/>
                    <Subtextocad>Terapeuta</Subtextocad>
                </EscolhaCad>
            </BoxPerfis>

            </PerfisContainer>
                )
            }
            