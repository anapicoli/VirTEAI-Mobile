import React, {useEffect, useState} from "react";
import {Alert, Text} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../../../utils/api";
import {ContainerLog, ContainerLogins, Contalogin, LoginContainer, TextoLogin,} from "../../../styles/login";
import Header from "../../../components/header/Header";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import {useNavigation, useRouter} from "expo-router";

export default function Login() {
  const router = useRouter();
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [senhaError, setSenhaError] = useState("");

  useEffect(() => {
    return navigation.addListener("focus", () => {
      setEmail("");
      setSenha("");
      setEmailError("");
      setSenhaError("");
      setLoading(false);
    });
  }, [navigation]);

  const validateEmailFormat = (e) => {
    const trimmed = (e || "").trim();
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
  };

  async function handleEntrar() {
    let hasError = false;
    setEmailError("");
    setSenhaError("");

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setEmailError("Informe seu email");
      hasError = true;
    } else if (!validateEmailFormat(trimmedEmail)) {
      setEmailError("Email inválido");
      hasError = true;
    }

    if (!senha) {
      setSenhaError("Informe sua senha");
      hasError = true;
    }

    if (hasError) return;

    try {
      setLoading(true);
      const response = await api.post("/login", { email: trimmedEmail, password: senha });
      const token = response?.data?.token;

      if (token) {
        await AsyncStorage.setItem("token", token);
        Alert.alert("Sucesso", "Login realizado com sucesso!", [
          {
            text: "OK",
            onPress: () => router.replace("/"),
          },
        ]);
      } else {
        Alert.alert("Erro", "Resposta inválida do servidor.");
      }
    } catch (err) {
      const serverMsg =
        err?.response?.data?.message ||
        (typeof err?.response?.data === "string" ? err.response.data : undefined);
      const msg = serverMsg || err?.message || "Não foi possível realizar o login.";
      Alert.alert("Erro", msg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <LoginContainer>
      <Header />
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
        <Contalogin onPress={() => router.push("/cadastro-paciente")}>
          <Text>Não tenho cadastro</Text>
        </Contalogin>
        <Button
          title="Entrar"
          onPress={handleEntrar}
          loading={loading}
          disabled={loading}
          variant="submit"
        />
      </ContainerLogins>
    </LoginContainer>
  );
}
