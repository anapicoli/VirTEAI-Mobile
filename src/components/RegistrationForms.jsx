import React, {useEffect, useState} from "react";
import {Alert} from "react-native";
import {useNavigation} from "expo-router";
import api from "../utils/api";
import Input from "../components/input/Input";
import Button from "../components/button/Button";

/**
 * RegistrationForm
 * Props:
 *  - redirectTo: rota após sucesso (default "/")
 *  - onSuccess: callback com a resposta do servidor
 *  - variant: "patient" | "therapist"  (padrão "patient")
 */
export default function RegistrationForm({ redirectTo = "/", onSuccess, variant = "patient" }) {
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [registro, setRegistro] = useState(""); // campo visual para "therapist"
  const [loading, setLoading] = useState(false);

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [cpfError, setCpfError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    return navigation.addListener("focus", () => {
      setFirstName("");
      setLastName("");
      setEmail("");
      setCpf("");
      setPassword("");
      setRegistro("");
      setFirstNameError("");
      setLastNameError("");
      setEmailError("");
      setCpfError("");
      setPasswordError("");
      setLoading(false);
    });
  }, [navigation]);

  const validateEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((e || "").trim());
  const sanitizeCpf = (raw) => (raw || "").replace(/\D/g, "");

  function validateAll() {
    let ok = true;
    setFirstNameError("");
    setLastNameError("");
    setEmailError("");
    setCpfError("");
    setPasswordError("");

    if (!firstName.trim()) {
      setFirstNameError("Informe o primeiro nome");
      ok = false;
    }
    if (!lastName.trim()) {
      setLastNameError("Informe o sobrenome");
      ok = false;
    }
    if (!email.trim()) {
      setEmailError("Informe seu email");
      ok = false;
    } else if (!validateEmail(email)) {
      setEmailError("Email inválido");
      ok = false;
    }

    const cpfDigits = sanitizeCpf(cpf);
    if (!cpfDigits) {
      setCpfError("Informe o CPF");
      ok = false;
    } else if (cpfDigits.length !== 11) {
      setCpfError("CPF deve ter 11 dígitos");
      ok = false;
    }

    if (!password) {
      setPasswordError("Defina a senha");
      ok = false;
    }

    return ok;
  }

  async function handleSubmit() {
    if (!validateAll()) return;

    const payload = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      cpf: sanitizeCpf(cpf),
      password,
    };

    try {
      setLoading(true);
      const resp = await api.post("/register", payload);

      Alert.alert("Sucesso", "Cadastro realizado com sucesso!", [
        {
          text: "OK",
          onPress: () => {
            if (onSuccess) onSuccess(resp);
            try {
              navigation.replace(redirectTo);
            } catch (e) {}
          },
        },
      ]);
    } catch (err) {
      const serverMsg =
        err?.response?.data?.message ||
        (typeof err?.response?.data === "string" ? err.response.data : undefined);
      const msg = serverMsg || err?.message || "Não foi possível realizar o cadastro.";
      Alert.alert("Erro", msg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Input
        label="Primeiro Nome:"
        placeholder="Insira seu primeiro nome"
        value={firstName}
        onChangeText={setFirstName}
        error={firstNameError}
      />
      <Input
        label="Sobrenome:"
        placeholder="Insira seu sobrenome"
        value={lastName}
        onChangeText={setLastName}
        error={lastNameError}
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
        label="CPF:"
        placeholder="Apenas números"
        value={cpf}
        onChangeText={(t) => setCpf((t || "").replace(/\D/g, ""))}
        keyboardType="numeric"
        maxLength={11}
        error={cpfError}
      />
      <Input
        label="Senha:"
        placeholder="Defina a sua senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        error={passwordError}
      />

      {variant === "therapist" && (
        <Input
          label="Registro Profissional:"
          placeholder="Registro Profissional"
          value={registro}
          onChangeText={setRegistro}
          editable={true}
          error={""}
        />
      )}

      <Button
        title="Enviar"
        onPress={handleSubmit}
        loading={loading}
        disabled={loading}
        variant="submit"
      />
    </>
  );
}
