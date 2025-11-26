import React, { useCallback, useState } from "react";
import { Alert } from "react-native";
import api from "../../../utils/api";
import { CadastroContainer, ContainerCad, ContainerCadastros, TextoCadastro } from "../../../styles/cadterapeuta";
import Header from "../../../components/header/Header";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import { useFocusEffect } from "@react-navigation/native";


export default function CadastroTerapeuta() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [registro, setRegistro] = useState("");
  const [loading, setLoading] = useState(false);
  const [nomeError, setNomeError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [senhaError, setSenhaError] = useState("");
  const [registroError, setRegistroError] = useState("");

  useFocusEffect(
    useCallback(() => {
      setNome("");
      setEmail("");
      setSenha("");
      setRegistro("");
      setNomeError("");
      setEmailError("");
      setSenhaError("");
      setRegistroError("");
      setLoading(false);
      return () => {
        setNomeError("");
        setEmailError("");
        setSenhaError("");
        setRegistroError("");
      };
    }, [])
  );

  async function handleEnviar() {
    setNomeError("");
    setEmailError("");
    setSenhaError("");
    setRegistroError("");
    let hasError = false;
    if (!nome) { setNomeError("Informe seu nome"); hasError = true; }
    if (!email) { setEmailError("Informe seu email"); hasError = true; }
    if (!senha) { setSenhaError("Defina uma senha"); hasError = true; }
    if (!registro) { setRegistroError("Informe seu registro profissional"); hasError = true; }
    if (hasError) return;

    try {
      setLoading(true);
      await api.post("register", { name: nome, email, password: senha, registro });
      Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
      setNome("");
      setEmail("");
      setSenha("");
      setRegistro("");
    } catch (err) {
      const msg = err?.response?.data?.message || "Não foi possível realizar o cadastro.";
      Alert.alert("Erro", msg);
    } finally {
      setLoading(false);
    }
  }
  return (
    <CadastroContainer>
      <Header/>
      <ContainerCad>
        <TextoCadastro>Terapeuta</TextoCadastro>
      </ContainerCad>
      <ContainerCadastros>
        <Input
          label="Nome:"
          placeholder="Insira seu nome completo"
          value={nome}
          onChangeText={setNome}
          error={nomeError}
        />
        <Input
          label="Email:"
          placeholder="Insira seu email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          error={emailError}
        />
        <Input
          label="Senha:"
          placeholder="Defina a sua senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          error={senhaError}
        />
        <Input
          label="Registro Profissional:"
          placeholder="Informe"
          value={registro}
          onChangeText={setRegistro}
          error={registroError}
        />
        <Button title="Enviar" onPress={handleEnviar} loading={loading} variant="submit" />
      </ContainerCadastros>


    </CadastroContainer>
  )
}
