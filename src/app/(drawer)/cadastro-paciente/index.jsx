import React, { useCallback, useState } from "react";
import { Alert } from "react-native";
import api from "../../../utils/api";
import {
  CadastroContainer,
  ContainerCad,
  ContainerCadastros,
  TextoCadastro,
} from "../../../styles/cadpaciente";
import Header from "../../../components/header/Header";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import { useFocusEffect } from "@react-navigation/native";


export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [nomeError, setNomeError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [senhaError, setSenhaError] = useState("");

  useFocusEffect(
    useCallback(() => {
      setNome("");
      setEmail("");
      setSenha("");
      setNomeError("");
      setEmailError("");
      setSenhaError("");
      setLoading(false);
      return () => {
        setNomeError("");
        setEmailError("");
        setSenhaError("");
      };
    }, [])
  );

  async function handleEnviar() {
    setNomeError("");
    setEmailError("");
    setSenhaError("");
    let hasError = false;
    if (!nome) { setNomeError("Informe seu nome"); hasError = true; }
    if (!email) { setEmailError("Informe seu email"); hasError = true; }
    if (!senha) { setSenhaError("Defina uma senha"); hasError = true; }
    if (hasError) return;

    try {
      setLoading(true);
      await api.post("register", { name: nome, email, password: senha });
      Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
      setNome("");
      setEmail("");
      setSenha("");
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
        <TextoCadastro>Cadastro</TextoCadastro>
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
        <Button title="Enviar" onPress={handleEnviar} loading={loading} variant="submit" />
      </ContainerCadastros>


    </CadastroContainer>
  )
}
