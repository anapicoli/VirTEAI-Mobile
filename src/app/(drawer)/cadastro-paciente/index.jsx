import React from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { CadastroContainer, ContainerCad, ContainerCadastros, TextoCadastro } from "../../../styles/cadpaciente";
import Header from "../../../components/header/Header";
import RegistrationForm from "../../../components/RegistrationForms";

export default function CadastroPaciente() {
  return (
    <CadastroContainer>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
        <ScrollView contentContainerStyle={{ alignItems: "center", paddingBottom: 40 }}>
          <Header />
          <ContainerCad>
            <TextoCadastro>Cadastro</TextoCadastro>
          </ContainerCad>
          <ContainerCadastros>
            <RegistrationForm redirectTo="/" />
          </ContainerCadastros>
        </ScrollView>
      </KeyboardAvoidingView>
    </CadastroContainer>
  );
}
