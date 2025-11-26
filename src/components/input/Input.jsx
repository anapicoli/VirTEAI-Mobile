import React from "react";
import { Container, ErrorText, Label, StyledTextInput } from "./styles";

export default function Input({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  error,
  ...rest
}) {
  return (
    <Container>
      {label ? <Label>{label}</Label> : null}
      <StyledTextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        $hasError={!!error}
        {...rest}
      />
      <ErrorText style={{ opacity: error ? 1 : 0 }}>{error || "placeholder"}</ErrorText>
    </Container>
  );
}
