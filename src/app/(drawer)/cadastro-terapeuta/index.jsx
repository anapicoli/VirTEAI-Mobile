import React from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { CadastroContainer, ContainerCad, ContainerCadastros, TextoCadastro } from "../../../styles/cadterapeuta";
import Header from "../../../components/header/Header";
import RegistrationForm from "../../../components/RegistrationForms";

export default function CadastroTerapeuta() {

  return (
    <CadastroContainer>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
        <ScrollView contentContainerStyle={{ alignItems: "center", paddingBottom: 40 }}>
          <Header />
          <ContainerCad>
            <TextoCadastro>Terapeuta</TextoCadastro>
          </ContainerCad>
          <ContainerCadastros>
            <RegistrationForm variant="therapist" redirectTo="/" />
          </ContainerCadastros>
        </ScrollView>
      </KeyboardAvoidingView>
    </CadastroContainer>
  );
}
