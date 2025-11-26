import React, { useCallback, useState } from "react";
import { Alert, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../../../utils/api";
import { ContainerLog, ContainerLogins,  Contalogin,  LoginContainer, TextoLogin } from "../../../styles/login";
import Header from "../../../components/header/Header";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import {router} from "expo-router";
import { useFocusEffect } from "@react-navigation/native";



export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [senhaError, setSenhaError] = useState("");

  useFocusEffect(
    useCallback(() => {
      setEmail("");
      setSenha("");
      setEmailError("");
      setSenhaError("");
      setLoading(false);
      return () => {
        setEmailError("");
        setSenhaError("");
      };
    }, [])
  );

  async function handleEntrar() {
    let hasError = false;
    setEmailError("");
    setSenhaError("");
    if (!email) {
      setEmailError("Informe seu email");
      hasError = true;
    }
    if (!senha) {
      setSenhaError("Informe sua senha");
      hasError = true;
    }
    if (hasError) return;

    try {
      setLoading(true);
      const response = await api.post("login", { email, password: senha });
      const token = response?.data?.token;
      if (token) {
        await AsyncStorage.setItem("token", token);
      }
      Alert.alert("Sucesso", "Login realizado com sucesso!");
      try { router.replace("/"); } catch {}
    } catch (err) {
      const msg = err?.response?.data?.message || "Não foi possível realizar o login.";
      Alert.alert("Erro", msg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <LoginContainer>
      <Header/>
      <ContainerLog>
        <TextoLogin>Login</TextoLogin>
      </ContainerLog>
      <ContainerLogins>
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
          placeholder="Insira sua senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          error={senhaError}
        />
        <Contalogin onPress={() => router.navigate('/perfis')} >
          <Text>Não tenho cadastro</Text>
        </Contalogin>
        <Button title="Entrar" onPress={handleEntrar} loading={loading} variant="submit" />
      </ContainerLogins>
    </LoginContainer>
  )
}
