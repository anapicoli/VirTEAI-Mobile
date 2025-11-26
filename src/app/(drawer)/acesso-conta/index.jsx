
import {
  AcessoConta,
  AcessoText,
  AcessoView,
  ContainerAcesso,
  ContainerContinuar,
  ContinuarText,
  Perfil,
  TelaFundo,
  Termos,
  Textinho,
} from "../../../styles/acessoconta";
import Header from "../../../components/header/Header";
import React from "react";

export default function SuaConta () {
  return (
    <AcessoConta>
      <Header/>

      <TelaFundo source={require('../../../assets/images/technologybackground.png')}>

        <ContainerAcesso>
          <AcessoText>Acesse Sua Conta!</AcessoText>
          <Perfil source={require('../../../assets/images/perfilicon.png')}/>
          <ContainerContinuar>
            <ContinuarText>Continuar</ContinuarText>
          </ContainerContinuar>
          <Textinho>Ao continuar você concorda com nossos</Textinho>
          <Termos>Termos de Uso</Termos>
        </ContainerAcesso>
      </TelaFundo>
    </AcessoConta>
  );
}
